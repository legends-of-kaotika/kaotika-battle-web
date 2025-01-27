interface RoundCounterInterface {

}

const RoundCounter: React.FC<RoundCounterInterface> = ({ }) => {

    return (
        <div className="flex flex-col h-full w-full rounded-md items-center justify-center text-5xl">
            <span>Round</span>
            <span>12</span>
        </div>
    );
};

export default RoundCounter;