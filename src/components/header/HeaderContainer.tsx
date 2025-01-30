import { useEffect } from "react";
import useStore from "../../store/store";
import LeftPlayerAttributes from "./LeftPlayerAttributesContainer";
import LeftPlayerAvatar from "./LeftPlayerAvatarContainer";
import RightPlayerAttributes from "./RightPlayerAttributesContainer";
import RightPlayerAvatar from "./RightPlayerAvatar";
import RoundContainer from "./RoundContainer";
import { attackerData, defenderData } from "../../constants/playersData";

const HeaderContainer: React.FC = () => {
  const { attacker, setAttacker, defender, setDefender } = useStore();

  useEffect(() => {
    setAttacker(null);
    setDefender(defenderData);
  }, [])

  if ((attacker || defender) === null) {
    return null;
  }

  return (
    <div className="relative flex flex-row w-full h-[25%] justify-between rounded-md pt-[0.9%]">

      {/* Left Player Avatar */}
      <LeftPlayerAvatar
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