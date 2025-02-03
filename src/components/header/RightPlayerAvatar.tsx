import { Player } from '../../Interfaces/Player';
import defaultAvatar from '/images/default_avatar.png';
interface RightPlayerAvatarInterface {
  player: Player
}

const RightPlayerAvatar: React.FC<RightPlayerAvatarInterface> = ({ player }) => {

  return (
    <div className="justify-items-start items-start h-[55%] w-[7%] mr-[4.5%] flex rounded-md">

      {player !== null ? (
        <img
          src={player.avatar}
          alt="Player Avatar"
          className="h-full w-full object-cover z-0 rounded-[100%]"
        />
      ) : <img
        src={defaultAvatar}
        alt="Player Avatar"
        className="h-full w-full object-cover z-0 rounded-[100%]"
      />}

    </div>
  );
};

export default RightPlayerAvatar;