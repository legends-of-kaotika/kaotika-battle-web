interface OpponentAvatarInterface {
  player: any
}

const OpponentAvatar: React.FC<OpponentAvatarInterface> = ({ player }) => {

  return (
    <div className="justify-items-start items-start h-[40%] w-[7%] mr-[4.5%] mt-[3.5%] flex rounded-md">
      <img src={player.avatar}
        alt="Player Avatar"
        className="h-full w-full object-cover z-0"
      />
    </div>
  );
};

export default OpponentAvatar;