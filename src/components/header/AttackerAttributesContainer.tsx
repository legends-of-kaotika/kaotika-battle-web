import AttackerLifeBar from "./AttackerLifeBar";

interface AttackerAttributesInterface {
    player: any
}

const AttackerAttributesContainer: React.FC<AttackerAttributesInterface> = ({ player }) => {

    return (
        <div className="flex flex-col justify-items-start items-start h-[40%] w-[27%] ml-[2.5%] mt-[5.2%] rounded-md">

            {/* Attacker Life Bar */}
            <AttackerLifeBar />

            <div className="flex h-full w-[65%] rounded-md items-center justify-center z-20">
                {player.name}
            </div>
        </div>
    );
};

export default AttackerAttributesContainer;