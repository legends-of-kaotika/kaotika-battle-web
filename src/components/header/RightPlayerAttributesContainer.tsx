import RightPlayerLifeBar from './RightPlayerLifeBar';
import useStore from '../../store/store';
import { useEffect } from 'react';
import { defenderData } from '../../constants/playersData';


interface RightPlayerAttributesInterface {
  player: any,
}

const RightPlayerAttributes: React.FC<RightPlayerAttributesInterface> = ({ player }) => {
  const { defender, setDefender} = useStore();

  useEffect(() => {
    setDefender(defenderData);
  }, []);

  return (
    <div className="flex flex-col justify-items-start items-start h-[60%] w-[27%] mr-[2.5%] mt-[2%] mb-[19%] rounded-md">

      {/* Right Player Life Bar */}
      {defender !== null ? (
        <RightPlayerLifeBar maxHitpoints={defender.base_attributes.hit_points} hitpoints={defender.attributes.hit_points}/>
      ) : null}

      <div className="flex h-full w-[65%] ml-auto rounded-md items-start justify-center text-3xl z-20  pt-[1%]">
        {player.nickname}
      </div>
    </div>
  );
};

export default RightPlayerAttributes;