import leftRightBar from '/images/life_bar_left.gif'

interface AttackerLifeBar {

}

const AttackerLifeBar: React.FC<AttackerLifeBar> = ({ }) => {

    return (
        <div className="flex h-full w-full rounded-md items-center justify-center z-0">
            <img src={leftRightBar}
                alt="Life Bar"
                className="h-full w-full object-cover"
            />
        </div>
    );
};

export default AttackerLifeBar;