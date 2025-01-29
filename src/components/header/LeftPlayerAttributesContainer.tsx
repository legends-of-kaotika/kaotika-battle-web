import LeftPlayerLifeBar from "./LeftPlayerLifeBar";

interface LeftPlayerAttributesInterface {
  player: any,
}

const LeftPlayerAttributes: React.FC<LeftPlayerAttributesInterface> = ({ player }) => {

  return (
    <div className="flex flex-col justify-items-start items-start h-[60%] w-[27%] ml-[2.6%] mt-[1.8%] pr-[0.1%] pl-[0.4%]">

      {/* Left Player Life Bar */}
      <LeftPlayerLifeBar maxHitpoints={player.maxHitpoints} hitpoints={player.hitpoints} />

      <div className="flex h-full w-[65%] items-center justify-center text-3xl z-20 pb-[6%]">
        {player.nickname}
      </div>
    </div>
  );
};

export default LeftPlayerAttributes;