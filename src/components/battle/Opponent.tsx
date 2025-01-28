import { Player } from "../../interfaces/Player";

interface OpponentProps{
  player: Player;
}

const Opponent: React.FC<OpponentProps> = ({player}) => {
  return (
    <div className="w-[25%] h-[98%] -ml-[10%] mt-[3%]">
      {player.nickname}
    </div>
  )
}

export default Opponent;