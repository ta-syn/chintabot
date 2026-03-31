import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Room from '../../../models/Room';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const roomCode = searchParams.get('roomCode');
    const playerName = searchParams.get('playerName');

    if (!roomCode) {
      return NextResponse.json({ error: "রুম কোড প্রয়োজন" }, { status: 400 });
    }

    await connectToDatabase();
    
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
    return NextResponse.json({ error: "সার্ভারে সমস্যা হয়েছে" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { action, playerName, roomCode, secretCharacter, updateData } = body;

    await connectToDatabase();

    const cleanCode = roomCode?.toUpperCase();

    switch (action) {
      case 'create':
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
    return NextResponse.json({ error: "সার্ভারে সমস্যা হয়েছে", message: error.message }, { status: 500 });
  }
}

