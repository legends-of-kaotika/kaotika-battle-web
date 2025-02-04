import { useEffect } from 'react';
import useStore from '../../store/store';
import LeftPlayerAttributes from './LeftPlayerAttributes';
import LeftPlayerAvatar from './LeftPlayerAvatar';
import RightPlayerAttributes from './RightPlayerAttributes';
import RightPlayerAvatar from './RightPlayerAvatar';
import RoundContainer from './RoundContainer';
import borderImage from '/images/header_border.png';

const HeaderContainer: React.FC = () => {
  const { attacker, defender } = useStore();
  
  useEffect(() => {
    console.log('attacker' + attacker);
  }, [attacker]);

  useEffect(() => {
    console.log('defender' + defender);
  }, [defender]);

  return (
    <div className="relative flex flex-row w-full h-[25%] justify-between rounded-md pt-[0.9%]">

      {/* Border Image */}
      <img
        src={borderImage}
        alt="Border Image"
        className="absolute top-0 left-0 z-10 w-full"
      />

      {/* Left Player Avatar */}
      <LeftPlayerAvatar
        player={attacker?.isBetrayer ? defender! : attacker!}
      />

      {/* Left Player Attributes */}
      <LeftPlayerAttributes
        player={attacker?.isBetrayer ? defender! : attacker!}
      />

      {/* Round Container */}
      <RoundContainer />

      {/* Right Player Attributes */}
      <RightPlayerAttributes
        player={attacker?.isBetrayer ? attacker! : defender!}
      />

      {/* Right Player Avatar */}
      <RightPlayerAvatar
        player={attacker?.isBetrayer ? attacker! : defender!}
      />

    </div>
  );
};

export default HeaderContainer;