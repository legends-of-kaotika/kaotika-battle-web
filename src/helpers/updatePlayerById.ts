import { Player } from '../Interfaces/Player';
import { PlayersRole } from '../Interfaces/PlayerRole';

export default function updatePlayerById(players: PlayersRole, id: string, changes: Partial<Player>) : PlayersRole{
  const allPlayers = [...players.dravocar, ...players.kaotika].map(player => player._id === id ? {...player, ...changes} : player);

  return {
    dravocar: allPlayers.filter(player => player.isBetrayer === true),
    kaotika: allPlayers.filter(player => player.isBetrayer === false)
  };
}

