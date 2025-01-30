import { Player } from "../../Interfaces/Player";
import useStore from "../../store/store";
import Opponent from "./Opponent";

interface BattleProp{
  leftPlayer: Player;
  rightPlayer: Player
}

const Battle: React.FC<BattleProp> = ({}) => {

  const { attacker, defender } = useStore();

  return (
    <div className="w-[98%] flex justify-around items-center">
      <Opponent player={attacker!} ></Opponent>
      <Opponent player={defender!} styles="transform scale-x-[-1]"></Opponent>
    </div>
  )
}

export default Battle;