import { Player } from "../../Interfaces/Player";

interface LeftPlayerAvatarInterface {
  player: Player
}

const LeftPlayerAvatar: React.FC<LeftPlayerAvatarInterface> = ({ player }) => {

  return (
    <div className="flex flex-start h-[55%] w-[7%] ml-[4.5%] justify-center items-center">
      <img src={player.avatar}
        alt="Player Avatar"
        className="h-full w-full object-cover z-0 rounded-[100%]"
      />
    </div>
  );
};

export default LeftPlayerAvatar;