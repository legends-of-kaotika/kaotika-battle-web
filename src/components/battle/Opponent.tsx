import { Player } from "../../Interfaces/Player";
import { getPhotoByRole } from "../../utils/getPhotoByRole";

interface OpponentProps {
  player: Player;
}

const Opponent: React.FC<OpponentProps> = ({ player }) => {

  const warriorPhoto = getPhotoByRole(player);

  return (
    <div className="w-[45%] h-[90%] mr-[5%] mt-[15%]">

      <img src={warriorPhoto}
        alt="Player Avatar"
        className="h-full w-full object-cover z-0"
      />
    </div>
  )
}

export default Opponent;