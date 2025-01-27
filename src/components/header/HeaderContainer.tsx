import AttackerAttributesContainer from "./AttackerAttributesContainer";
import AttackerAvatar from "./AttackerAvatarContainer";
import OpponentAttributesContainer from "./OpponentAttributesContainer";
import OpponentAvatar from "./OpponentAvatar";
import RoundContainer from "./RoundContainer";

interface HeaderInfoContainer {

}

const HeaderContainer: React.FC<HeaderInfoContainer> = ({ }) => {

    let player = {
        image: 'public/miguel_angel.png'
    };

    let opponent = {
        image: 'public/ander.png'
    }

    return (
        <div className="relative flex flex-row w-full h-[30%] justify-between rounded-md border-1">

            {/* Attacker Avatar */}
            <AttackerAvatar
                player={player}
            />

            {/* Attacker Attributes */}
            <AttackerAttributesContainer />

            {/* Round Container */}
            <RoundContainer />

            {/* Opponent Attributes */}
            <OpponentAttributesContainer />

            {/* Opponent Avatar */}
            <OpponentAvatar
                opponent={opponent}
            />

        </div>
    );
};

export default HeaderContainer;