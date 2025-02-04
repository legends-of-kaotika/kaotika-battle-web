import { Player } from '../../Interfaces/Player';
import useStore from '../../store/store';
import LeftPlayerLifeBar from './LeftPlayerLifeBar';

interface LeftPlayerAttributesInterface {
  player: Player,
}

const LeftPlayerAttributes: React.FC<LeftPlayerAttributesInterface> = ({ player }) => {
  const { attacker } = useStore();

  return (
    <div className="flex flex-col justify-items-start items-start h-[60%] w-[27%] ml-[2.6%] mt-[2%] pr-[0.1%] pl-[0.4%]">

      {/* Left Player Life Bar */}
      {attacker !== null ? (
        <LeftPlayerLifeBar
          maxHitpoints={attacker.base_attributes.hit_points}
          hitpoints={attacker.attributes.hit_points} />
      ) : null}
      <div className="flex h-full w-[65%] mr-auto rounded-md items-start justify-center text-3xl z-20 pt-[1%]">
        {player.nickname}
      </div>
    </div>
  );
};

export default LeftPlayerAttributes;