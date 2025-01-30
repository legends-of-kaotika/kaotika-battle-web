import { Socket } from "socket.io-client";
import { Player } from "./Player";

export interface AppState{
    players : Player[];
    addPlayer: (player: Player) => void;
    socket: Socket;
    round: number;
    addRound: (by: number) => void;
    attack: (hit_points: number) => void;
    attacker: Player | null;
    defender: Player | null;
    setAttacker: (attacker : Player | null) => void;
    setDefender: (defender: Player | null) => void;
    setPlayers: (players: Player[]) => void;
    timer: number;
    setTimer: (timer: number) => void;
}