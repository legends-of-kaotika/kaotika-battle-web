import AttackerAttributesContainer from "./AttackerAttributesContainer";
import AttackerAvatar from "./AttackerAvatarContainer";
import OpponentAttributesContainer from "./OpponentAttributesContainer";
import OpponentAvatar from "./OpponentAvatar";
import RoundContainer from "./RoundContainer";
//import HealthComponent from "./HealthComponent";

interface HeaderInfoContainer {

}

const HeaderContainer: React.FC<HeaderInfoContainer> = ({ }) => {

  let player = {
    name: 'Miguel Angel',
    image: 'images/miguel_angel.png'
  };

  let opponent = {
    name: 'The Chinese',
    image: 'images/ander.png'
  }

  return (
    <div className="relative flex flex-row w-full h-[30%] justify-between rounded-md">

      {/* Attacker Avatar */}
      <AttackerAvatar
        player={player}
      />

      {/* Attacker Attributes */}
      <AttackerAttributesContainer
        player={player}
      />

      {/* Round Container */}
      <RoundContainer />

      {/* Opponent Attributes */}
      <OpponentAttributesContainer
        opponent={opponent}
      />

      {/* Opponent Avatar */}
      <OpponentAvatar
        opponent={opponent}
      />

      {/* <HealthComponent*/}
      {/* <HealthComponent health={100}/> */}

    </div>
  );
};

export default HeaderContainer;