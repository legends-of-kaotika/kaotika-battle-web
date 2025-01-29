interface RoundCounterInterface {

}

const RoundCounter: React.FC<RoundCounterInterface> = ({ }) => {

  return (
    <div className="flex flex-col w-full rounded-md justify-center text-5xl text-amber-100 ">
      <span>Round</span>
      <span>12</span>
    </div>
  );
};

export default RoundCounter;