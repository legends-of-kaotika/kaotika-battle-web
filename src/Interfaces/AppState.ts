import { Socket } from "socket.io-client";
import { Player } from "./Player";

interface PlayersRole {
    dravocar: Player[];
    kaotika: Player[];
}

export interface AppState{
    players : PlayersRole;
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