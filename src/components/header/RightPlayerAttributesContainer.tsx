import RightPlayerLifeBar from './RightPlayerLifeBar';

interface RightPlayerAttributesInterface {
  player: any,
}

const RightPlayerAttributes: React.FC<RightPlayerAttributesInterface> = ({ player }) => {

  return (
    <div className="flex flex-col justify-items-start items-start h-[40%] w-[27%] mr-[2.5%] mt-[5.2%] rounded-md">

      {/* Right Player Life Bar */}
      <RightPlayerLifeBar maxHitpoints={player.maxHitpoints} hitpoints={player.hitpoints}/>

      <div className="flex h-full w-[65%] ml-auto rounded-md items-center justify-center text-2xl z-20">
        {player.nickname}
      </div>
    </div>
  );
};

export default RightPlayerAttributes;