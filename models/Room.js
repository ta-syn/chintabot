import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  host: { type: String, required: true },
  players: [{ type: String }],
  lastSeen: { type: Map, of: Number, default: {} },
  status: { type: String, enum: ['waiting', 'playing', 'finished'], default: 'waiting' },
  scores: { type: Map, of: Number, default: {} },
  currentRound: { type: Number, default: 1 },
  totalRounds: { type: Number, default: 4 },
  currentGuesser: { type: String },
  currentThinkingPlayer: { type: String },
  secretCharacter: { type: String },
  gameData: { type: Object, default: {} },
  createdAt: { type: Date, default: Date.now, expires: 3600 } // Auto-delete after 1 hour
});

export default mongoose.models.Room || mongoose.model('Room', RoomSchema);
