import AttackerAttributesContainer from "./AttackerAttributesContainer";
import AttackerAvatar from "./AttackerAvatarContainer";
import OpponentAttributesContainer from "./OpponentAttributesContainer";
import OpponentAvatar from "./OpponentAvatar";
import RoundContainer from "./RoundContainer";
//import HealthComponent from "./HealthComponent";

interface HeaderInfoContainer {

}

const HeaderContainer: React.FC<HeaderInfoContainer> = ({ }) => {

    return (
        <div className="relative flex flex-row w-full h-[30%] justify-between rounded-md">

            {/* Attacker Avatar */}
            <AttackerAvatar />

            {/* Attacker Attributes */}
            <AttackerAttributesContainer />

            {/* Round Container */}
            <RoundContainer />

            {/* Opponent Attributes */}
            <OpponentAttributesContainer />

            {/* Opponent Avatar */}
            <OpponentAvatar />

            {/* <HealthComponent*/}
            {/* <HealthComponent health={100}/> */}

        </div>
    );
};

export default HeaderContainer;