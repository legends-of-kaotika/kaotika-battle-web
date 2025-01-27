interface AttackerAvatarInterface {
    player: any
}

const AttackerAvatar: React.FC<AttackerAvatarInterface> = ({ player }) => {

    return (
        <div className="relative flex flex-start h-[40%] w-[7%] ml-[4.5%] mt-[3.5%] justify-center items-center z-0">
            <img src={player.image}
                alt="Player Avatar"
                className="h-full w-full object-cover z-0 rounded-full"
            />
        </div>
    );
};

export default AttackerAvatar;