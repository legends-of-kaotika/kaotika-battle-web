import { Player } from '../Interfaces/Player';
import { PlayersRole } from '../Interfaces/PlayerRole';
export default function getPlayerById(players: PlayersRole, id: string) : Player | undefined{
  const allPlayers = [...players.dravocar, ...players.kaotika];
  return allPlayers.find(player => player._id === id);
}