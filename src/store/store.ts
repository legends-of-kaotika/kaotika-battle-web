import { create } from "zustand";
import { AppState } from "../Interfaces/AppState";
import { io } from "socket.io-client";
import { Player } from "../Interfaces/Player";

const SERVER_URL = 'https://kaotika-battle-server.onrender.com';

const useStore = create<AppState>()((set) => ({
    players: [],
    addPlayer: (player : Player) => set((state) => ({players : [...state.players, player]})),
    socket: io(SERVER_URL),
    round: 1,
    addRound: (by: number) => set((state) => ({ round: state.round += by})),
    attack: (hit_points: number) => set((state) => ({
        defender : {...state.defender!,
            attributes: {
                ...state.defender!.attributes,
                hit_points: state.defender!.attributes.hit_points - hit_points
            }
        }
    })),
    attacker: null,
    defender: null,
    setAttacker: (attacker: Player) => set(() => ({attacker : attacker})),
    setDefender: (defender: Player) => set(() => ({defender: defender})),
}));

export default useStore;