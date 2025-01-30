import { Player } from "../../Interfaces/Player";
interface LeftPlayerAttributesInterface {
  player: Player,
}

const LeftPlayerAvatar: React.FC<LeftPlayerAttributesInterface> = ({ player }) => {
  // const { attacker } = useStore();
  return (
    <div className="flex flex-start h-[55%] w-[7%] ml-[4.5%] justify-center items-center">

      {player !== null ? (
        <img src={player!.avatar}
          alt="Player Avatar"
          className="h-full w-full object-cover z-0 rounded-[100%]"
        />
      ) : null}
    </div>
  );
};

export default LeftPlayerAvatar;