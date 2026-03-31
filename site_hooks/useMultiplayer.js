'use client';

import { useState, useEffect } from 'react';
import { watchRoom, updateRoom as updateRoomUtil, getRoom } from '../lib/multiplayerUtils';

export default function useMultiplayer({ roomCode, playerName, isHost }) {
  const [room, setRoom] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!roomCode) return;

    // Initial load
    const initial = getRoom(roomCode);
    if (initial) {
      setTimeout(() => setRoom(initial), 0);
    } else {
      setTimeout(() => setError("রুমের তথ্য পাওয়া যায়নি।"), 0);
    }

    // Start watching for changes
    const cleanup = watchRoom(roomCode, (updatedRoom) => {
      if (!updatedRoom) {
        setError("রুমটি মুছে ফেলা হয়েছে বা বিচ্ছিন্ন হয়েছে।");
        setRoom(null);
      } else {
        setRoom(updatedRoom);
      }
    });

    return () => cleanup();
  }, [roomCode]);

  const updateRoom = (updates) => {
    return updateRoomUtil(roomCode, updates);
  };

  return {
    room,
    players: room?.players || [],
    scores: room?.scores || {},
    currentRound: room?.currentRound || 0,
    gamePhase: room?.status || 'setup',
    error,
    updateRoom
  };
}
