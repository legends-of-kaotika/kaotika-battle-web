import useStore from '../../store/store';
import Opponent from './Opponent';


const Battle: React.FC = () => {

  const { attacker, defender } = useStore();

  return (
    <div className="w-[98%] flex justify-around items-center  ">
      <Opponent player={attacker!} ></Opponent>
      <Opponent
        player={defender!}
        styles="transform scale-x-[-1]"></Opponent>
    </div>
  );
};

export default Battle;