import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Room from '../../../models/Room';

// Simple in-memory rate limiting
const rateLimitMap = new Map();
function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 120; // Allow enough for polling (2 per second)
  
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }
  
  const record = rateLimitMap.get(ip);
  if (now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }
  
  record.count += 1;
  return record.count > maxRequests;
}

// Simple input sanitizer
const sanitize = (str) => typeof str === 'string' ? str.trim().substring(0, 50).replace(/[<>]/g, '') : str;


export async function GET(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (checkRateLimit(ip)) {
      return NextResponse.json({ error: "অতিরিক্ত রিকোয়েস্ট পাঠানো হচ্ছে। দয়া করে অপেক্ষা করুন।" }, { status: 429 });
    }

    const { searchParams } = new URL(request.url);
    const roomCode = searchParams.get('roomCode');
    const playerName = sanitize(searchParams.get('playerName'));

    if (!roomCode) {
      return NextResponse.json({ error: "রুম কোড প্রয়োজন" }, { status: 400 });
    }

    try {
      await connectToDatabase();
    } catch (dbErr) {
      console.error("Database Connection Error:", dbErr);
      return NextResponse.json({ error: "ডাটাবেজ সংযোগে সমস্যা হয়েছে" }, { status: 500 });
    }
    
    // Find room and update heartbeat for current player
    const update = {};
    if (playerName) {
      update[`lastSeen.${playerName}`] = Date.now();
    }
    
    const room = await Room.findOneAndUpdate(
      { code: roomCode.toUpperCase() },
      { $set: update },
      { new: true }
    );

    if (!room) {
      return NextResponse.json({ error: "রুম পাওয়া যায়নি" }, { status: 404 });
    }

    return NextResponse.json({ success: true, room });
  } catch (error) {
    console.error("Multiplayer GET Error:", error);
    return NextResponse.json({ error: "সার্ভারে সমস্যা হয়েছে: " + error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (checkRateLimit(ip)) {
      return NextResponse.json({ error: "অতিরিক্ত রিকোয়েস্ট পাঠানো হচ্ছে। দয়া করে অপেক্ষা করুন।" }, { status: 429 });
    }

    const body = await request.json();
    let { action, playerName, roomCode, secretCharacter, updateData } = body;
    
    playerName = sanitize(playerName);
    secretCharacter = sanitize(secretCharacter);

    try {
      await connectToDatabase();
    } catch (dbErr) {
      console.error("Database Connection Error:", dbErr);
      return NextResponse.json({ error: "ডাটাবেজ সংযোগে সমস্যা হয়েছে" }, { status: 500 });
    }

    const cleanCode = roomCode?.toUpperCase();

    switch (action) {
      case 'create':
        if (!cleanCode || !playerName) {
          return NextResponse.json({ error: "কোড এবং নাম প্রয়োজন" }, { status: 400 });
        }
        
        // Check if room already exists
        const existing = await Room.findOne({ code: cleanCode });
        if (existing) {
          await Room.deleteOne({ code: cleanCode });
        }

        const newRoom = await Room.create({
          code: cleanCode,
          host: playerName,
          players: [playerName],
          lastSeen: { [playerName]: Date.now() },
          scores: { [playerName]: 0 },
          status: 'waiting'
        });
        return NextResponse.json({ success: true, room: newRoom });

      case 'join':
        const roomToJoin = await Room.findOne({ code: cleanCode });
        if (!roomToJoin) return NextResponse.json({ error: "রুম পাওয়া যায়নি" }, { status: 404 });
        
        if (roomToJoin.players.length >= 2 && !roomToJoin.players.includes(playerName)) {
          return NextResponse.json({ error: "রুম পূর্ণ" }, { status: 400 });
        }
        
        if (!roomToJoin.players.includes(playerName)) {
          roomToJoin.players.push(playerName);
          roomToJoin.scores.set(playerName, 0);
          roomToJoin.status = 'playing';
        }
        
        roomToJoin.lastSeen.set(playerName, Date.now());
        await roomToJoin.save();
        return NextResponse.json({ success: true, room: roomToJoin });

      case 'update':
        const updatedRoom = await Room.findOneAndUpdate(
          { code: cleanCode },
          { $set: { ...updateData, [`lastSeen.${playerName}`]: Date.now() } },
          { new: true }
        );
        return NextResponse.json({ success: true, room: updatedRoom });

      case 'startRound':
        const roomStarted = await Room.findOneAndUpdate(
          { code: cleanCode },
          { $set: { 
              status: 'playing', 
              secretCharacter, 
              [`lastSeen.${playerName}`]: Date.now() 
            } 
          },
          { new: true }
        );
        return NextResponse.json({ success: true, room: roomStarted });

      default:
        return NextResponse.json({ error: "ভুল একশন!" }, { status: 400 });
    }
  } catch (error) {
    console.error("Multiplayer POST Error:", error);
    return NextResponse.json({ error: "সার্ভারে সমস্যা হয়েছে: " + error.message }, { status: 500 });
  }
}

