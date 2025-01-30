import RightPlayerLifeBar from './RightPlayerLifeBar';

interface RightPlayerAttributesInterface {
  player: any,
}

const RightPlayerAttributes: React.FC<RightPlayerAttributesInterface> = ({ player }) => {

  return (
    <div className="flex flex-col justify-items-start items-start h-[60%] w-[27%] mr-[2.5%] mt-[2%] mb-[19%] rounded-md">

      {/* Right Player Life Bar */}
      <RightPlayerLifeBar maxHitpoints={player.base_attributes.hit_points} hitpoints={player.attributes.hit_points}/>

      <div className="flex h-full w-[65%] ml-auto rounded-md items-start justify-center text-3xl z-20  pt-[1%]">
        {player.nickname}
      </div>
    </div>
  );
};

export default RightPlayerAttributes;