import { useEffect } from "react";
import useStore from "../../store/store";
import LeftPlayerAttributes from "./LeftPlayerAttributes";
import LeftPlayerAvatar from "./LeftPlayerAvatar";
import RightPlayerAttributes from "./RightPlayerAttributes";
import RightPlayerAvatar from "./RightPlayerAvatar";
import RoundContainer from "./RoundContainer";
import { attackerData, defenderData } from "../../constants/playersData";

const HeaderContainer: React.FC = () => {
  const { attacker, setAttacker, defender, setDefender } = useStore();

  useEffect(() => {
    setAttacker(attackerData);
    setDefender(defenderData);
  }, [])

  return (
    <div className="relative flex flex-row w-full h-[25%] justify-between rounded-md pt-[0.9%]">

      {/* Left Player Avatar */}
      <LeftPlayerAvatar
      player={attacker!}
      />

      {/* Left Player Attributes */}
      <LeftPlayerAttributes
        player={attacker!}
      />

      {/* Round Container */}
      <RoundContainer />

      {/* Right Player Attributes */}
      <RightPlayerAttributes
        player={defender!}
      />

      {/* Right Player Avatar */}
      <RightPlayerAvatar
        player={defender!}
      />

    </div>
  );
};

export default HeaderContainer;