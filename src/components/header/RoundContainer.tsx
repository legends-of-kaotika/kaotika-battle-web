import BattleTime from "./BattleTime";
import RoundCounter from "./RoundCounter";

interface RoundContainerInterface {

}

const RoundContainer: React.FC<RoundContainerInterface> = ({ }) => {

    return (
        <div className="flex flex-col justify-items-start items-start h-full w-1/12 rounded-md border-1">
            {/* Round Number */}
            <RoundCounter />

            {/* Battle Time */}
            <BattleTime />
        </div>
    );
};

export default RoundContainer;