import OpponentLifeBar from './OpponentLifeBar';

interface OpponentAttributesContainerInterface {
    opponent: any
}

const OpponentAttributesContainer: React.FC<OpponentAttributesContainerInterface> = ({ opponent }) => {

    return (
        <div className="flex flex-col justify-items-start items-start h-[40%] w-[27%] mr-[2.5%] mt-[5.2%] rounded-md">

            {/* Opponent Life Bar */}
            <OpponentLifeBar />

            <div className="flex h-full w-[65%] ml-auto rounded-md items-center justify-center text-2xl z-20">
                {opponent.name}
            </div>
        </div>
    );
};

export default OpponentAttributesContainer;