import { Socket } from "socket.io-client";
import { Player } from "./Player";

export interface AppState{
    players : Player[];
    addPlayer: (player: Player) => void;
    socket: Socket;
    round: number;
    addRound: (by: number) => void;
}