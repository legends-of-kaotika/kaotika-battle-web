import { Player } from "../Interfaces/Player";

export default function updatePlayerById(players: Player[], id: string, changes: Partial<Player>) : Player[]{
    console.log('entra a la funcion');
    return players.map(player => player._id === id ? {...player, ...changes} : player);
}

