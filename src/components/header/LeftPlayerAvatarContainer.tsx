interface LeftPlayerAvatarInterface {
  player: any
}

const LeftPlayerAvatar: React.FC<LeftPlayerAvatarInterface> = ({ player }) => {

  return (
    <div className="relative flex flex-start h-[40%] w-[7%] ml-[4.5%] mt-[3.5%] justify-center items-center">
      <img src={player.avatar}
        alt="Player Avatar"
        className="h-full w-full object-cover z-0 rounded-full"
      />
    </div>
  );
};

export default LeftPlayerAvatar;