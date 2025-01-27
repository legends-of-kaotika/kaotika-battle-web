import rightLifeBar from '/images/life_bar_right.gif'

interface OpponentAttributesContainerInterface {
    opponent: any
}

const OpponentAttributesContainer: React.FC<OpponentAttributesContainerInterface> = ({ opponent }) => {

    return (
        <div className="flex flex-col justify-items-start items-start h-[40%] w-[27%] mr-[2.5%] mt-[5.2%] rounded-md">
            <div className="flex h-full w-full rounded-md items-center justify-center z-0">
                <img src={rightLifeBar}
                    alt="Life Bar"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex h-full w-[65%] ml-auto rounded-md items-center justify-center z-20">
                {opponent.name}
            </div>
        </div>
    );
};

export default OpponentAttributesContainer;