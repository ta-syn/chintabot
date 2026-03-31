'use client';

const ROOM_KEY_PREFIX = 'chintabot_room_';

export const generateRoomCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

export const createRoom = (playerName) => {
  const roomCode = generateRoomCode();
  const room = {
    code: roomCode,
    host: playerName,
    players: [playerName],
    status: "waiting",
    createdAt: Date.now(),
    rounds: [],
    currentRound: 0,
    scores: { [playerName]: 0 }
  };
  localStorage.setItem(`${ROOM_KEY_PREFIX}${roomCode}`, JSON.stringify(room));
  return { code: roomCode, room };
};

export const joinRoom = (roomCode, playerName) => {
  const code = roomCode.toUpperCase();
  const data = localStorage.getItem(`${ROOM_KEY_PREFIX}${code}`);
  
  if (!data) {
    throw new Error("এই রুম কোডটি পাওয়া যায়নি 😢");
  }

  const room = JSON.parse(data);
  if (room.players.length >= 2) {
    throw new Error("এই রুমটি ইতিমধ্যে পূর্ণ হয়ে গেছে!");
  }

  if (room.players.includes(playerName)) {
    throw new Error("এই নামের একজন ইতিমধ্যে রুমে আছে!");
  }

  room.players.push(playerName);
  room.scores[playerName] = 0;
  room.status = "playing"; // Transition when full
  localStorage.setItem(`${ROOM_KEY_PREFIX}${code}`, JSON.stringify(room));
  return room;
};

export const getRoom = (roomCode) => {
  const data = localStorage.getItem(`${ROOM_KEY_PREFIX}${roomCode.toUpperCase()}`);
  return data ? JSON.parse(data) : null;
};

export const updateRoom = (roomCode, updates) => {
  const code = roomCode.toUpperCase();
  const existing = getRoom(code);
  if (!existing) return null;
  
  const updated = { ...existing, ...updates };
  localStorage.setItem(`${ROOM_KEY_PREFIX}${code}`, JSON.stringify(updated));
  return updated;
};

export const deleteRoom = (roomCode) => {
  localStorage.removeItem(`${ROOM_KEY_PREFIX}${roomCode.toUpperCase()}`);
};

export const watchRoom = (roomCode, callback, interval = 2000) => {
  const code = roomCode.toUpperCase();
  let lastData = localStorage.getItem(`${ROOM_KEY_PREFIX}${code}`);
  
  const timer = setInterval(() => {
    const currentData = localStorage.getItem(`${ROOM_KEY_PREFIX}${code}`);
    if (currentData !== lastData) {
      lastData = currentData;
      callback(currentData ? JSON.parse(currentData) : null);
    }
  }, interval);

  return () => clearInterval(timer);
};

export const calculateScore = (questionCount, won) => {
  if (!won) return 0;
  // Maximum 20 points for 1 question, minimum 1 point for 20 questions
  return Math.max(1, 21 - questionCount);
};
