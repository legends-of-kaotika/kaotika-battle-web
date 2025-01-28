import rightLifeBar from '/images/life_bar_right.gif'

interface OpponentLifeBarInterface {
    opponent: any
}

const OpponentLifeBar: React.FC<OpponentLifeBarInterface> = ({}) => {

    return (
        <div className="flex h-full w-full rounded-md items-center justify-center z-0">
            <img src={rightLifeBar}
                alt="Life Bar"
                className="h-full w-full object-cover"
            />
        </div>
    );
};

export default OpponentLifeBar;