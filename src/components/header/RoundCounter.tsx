interface RoundCounterInterface {

}

const RoundCounter: React.FC<RoundCounterInterface> = ({ }) => {

    return (
        <div className="flex h-full w-full rounded-md items-center justify-center text-6xl">
            Round
            12
        </div>
    );
};

export default RoundCounter;