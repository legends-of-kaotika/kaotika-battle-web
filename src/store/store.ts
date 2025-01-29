import { create } from "zustand";
import { AppState } from "../Interfaces/AppState";
import { io } from "socket.io-client";


const SERVER_URL = 'https://kaotika-battle-server.onrender.com';

const useStore = create<AppState>()((set) => ({
    players: [],
    addPlayer: (player) => set((state) => ({players : [...state.players, player]})),
    socket: io(SERVER_URL)
}));

export default useStore;