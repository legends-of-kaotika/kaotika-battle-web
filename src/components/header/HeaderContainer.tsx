import AttackerAttributesContainer from "./AttackerAttributesContainer";
import AttackerAvatar from "./AttackerAvatarContainer";
import OpponentAttributesContainer from "./OpponentAttributesContainer";
import OpponentAvatar from "./OpponentAvatar";
import RoundContainer from "./RoundContainer";

interface HeaderInfoContainer {
  leftPlayer: any,
  rightPlayer: any,
}

const HeaderContainer: React.FC<HeaderInfoContainer> = ({ leftPlayer, rightPlayer }) => {

  return (
    <div className="relative flex flex-row w-full h-[30%] justify-between rounded-md">

      {/* Attacker Avatar */}
      <AttackerAvatar
        player={leftPlayer}
      />

      {/* Attacker Attributes */}
      <AttackerAttributesContainer
        player={leftPlayer}
      />

      {/* Round Container */}
      <RoundContainer />

      {/* Opponent Attributes */}
      <OpponentAttributesContainer
        player={rightPlayer}
      />

      {/* Opponent Avatar */}
      <OpponentAvatar
        player={rightPlayer}
      />

      {/* <HealthComponent*/}
      {/* <HealthComponent health={100}/> */}

    </div>
  );
};

export default HeaderContainer;