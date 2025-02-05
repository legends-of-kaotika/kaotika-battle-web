import { io } from 'socket.io-client';
import { create } from 'zustand';
import { AppState } from '../Interfaces/AppState';
import { Player } from '../Interfaces/Player';
import { PlayersRole } from '../Interfaces/PlayerRole';

const SERVER_URL = 'https://kaotika-battle-server-yqen.onrender.com';

const useStore = create<AppState>()((set) => ({

  players: { dravocar: [], kaotika: [] },
  addKaotika: (kaotika: Player) => set((state) => ({ players: { ...state.players, kaotika: [...state.players.kaotika, kaotika] } })),
  addDravocar: (dravocar: Player) => set((state) => ({ players: { ...state.players, dravocar: [...state.players.dravocar, dravocar] } })),
  socket: io(SERVER_URL),
  round: 1,
  addRound: (by: number) => set((state) => ({ round: state.round += by })),
  attacker: null,
  defender: null,

  setAttacker: (attacker: Player | null) => set(() => ({ attacker: attacker })),
  setDefender: (defender: Player | null) => set(() => ({ defender: defender })),
  setPlayers: (players: PlayersRole) => set(() => ({ players: players })),
  timer: -1,
  setTimer: (timer: number) => set(() => ({ timer: timer })),


}));

export default useStore;