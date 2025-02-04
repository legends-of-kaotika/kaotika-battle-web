import { create } from "zustand";
import { AppState } from "../Interfaces/AppState";
import { io } from "socket.io-client";
import { Player } from "../Interfaces/Player";
import { PlayersRole } from "../Interfaces/PlayerRole";

const SERVER_URL = 'https://kaotika-battle-server.onrender.com';

const useStore = create<AppState>()((set) => ({

	players: { dravocar: [], kaotika: [] },
	addKaotika: (kaotika: Player) => set((state) => ({ players: { ...state.players, kaotika: [...state.players.kaotika, kaotika] } })),
	addDravocar: (dravocar: Player) => set((state) => ({ players: { ...state.players, dravocar: [...state.players.dravocar, dravocar] } })),
	socket: io(SERVER_URL),
	round: 1,
	addRound: (by: number) => set((state) => ({ round: state.round += by })),
	attack: (hit_points: number) => set((state) => ({
		defender: {
			...state.defender!,
			attributes: {
				...state.defender!.attributes,
				hit_points: state.defender!.attributes.hit_points - hit_points
			}
		}
	})),
	attacker: null,
	defender: null,

	setAttacker: (attacker: Player | null) => set(() => ({ attacker: attacker })),
	setDefender: (defender: Player | null) => set(() => ({ defender: defender })),
	setPlayers: (players: PlayersRole) => set(() => ({ players: players })),
	timer: 0,
	setTimer: (timer: number) => set(() => ({ timer: timer })),


}));

export default useStore;