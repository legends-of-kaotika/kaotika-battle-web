import BattleTime from './BattleTime';
import RoundCounter from './RoundCounter';

const RoundContainer: React.FC = () => {

  return (
    <div className="flex flex-col justify-items-start items-start h-full w-1/12 rounded-md z-20">
      {/* Round Number */}
      <RoundCounter />

      {/* Battle Time */}
      <BattleTime />
    </div>
  );
};

export default RoundContainer;