import LeftPlayerAttributes from "./LeftPlayerAttributesContainer";
import LeftPlayerAvatar from "./LeftPlayerAvatarContainer";
import RightPlayerAttributes from "./RightPlayerAttributesContainer";
import RightPlayerAvatar from "./RightPlayerAvatar";
import RoundContainer from "./RoundContainer";

interface HeaderInfoContainer {
  leftPlayer: any,
  rightPlayer: any,
}

const HeaderContainer: React.FC<HeaderInfoContainer> = ({ leftPlayer, rightPlayer }) => {

  return (
    <div className="relative flex flex-row w-full h-[25%] justify-between rounded-md pt-[0.9%]">

      {/* Left Player Avatar */}
      <LeftPlayerAvatar
        player={leftPlayer}
      />

      {/* Left Player Attributes */}
      <LeftPlayerAttributes
        player={leftPlayer}
      />

      {/* Round Container */}
      <RoundContainer />

      {/* Right Player Attributes */}
      <RightPlayerAttributes
        player={rightPlayer}
      />

      {/* Right Player Avatar */}
      <RightPlayerAvatar
        player={rightPlayer}
      />

      {/* <HealthComponent*/}
      {/* <HealthComponent health={100}/> */}

    </div>
  );
};

export default HeaderContainer;