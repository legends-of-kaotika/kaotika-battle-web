import { Player } from "../../Interfaces/Player";
import Opponent from "./Opponent";

interface BattleProp{
  leftPlayer: Player;
  rightPlayer: Player
}

const Battle: React.FC<BattleProp> = ({leftPlayer, rightPlayer}) => {
  return (
    <div className="w-[98%] flex justify-around items-center">
      <Opponent player={leftPlayer} ></Opponent>
      <Opponent player={rightPlayer} styles="transform scale-x-[-1]"></Opponent>
    </div>
  )
}

export default Battle;