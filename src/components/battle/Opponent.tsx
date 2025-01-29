import { Player } from "../../Interfaces/Player";
import { getPhotoByRole } from "../../utils/getPhotoByRole";

interface OpponentProps {
  player: Player;
  styles?: string;
}



const Opponent: React.FC<OpponentProps> = ({ player, styles}) => {

  const warriorPhoto = getPhotoByRole(player);

  return (
    <div className="w-[45%] h-[90%] mr-[5%] mt-[15%]">

      {warriorPhoto !== '' ? (
        <img src={warriorPhoto}
          className={`h-full w-full object-cover z-0 ${styles}`}
          
        />
      ) : null}

    </div>
  )
}


export default Opponent;