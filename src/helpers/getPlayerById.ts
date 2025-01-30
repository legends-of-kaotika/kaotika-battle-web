import { Player } from "../Interfaces/Player";

export default function getPlayerById(players: Player[], id: string) : Player | undefined{
    return players.find(player => player._id === id);
}