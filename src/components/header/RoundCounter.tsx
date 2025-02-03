import useStore from "../../store/store";

interface RoundCounterInterface {

}

const RoundCounter: React.FC<RoundCounterInterface> = ({ }) => {
  const { round } = useStore();

  return (
    <div className="flex flex-col w-full rounded-md justify-center text-5xl text-orange-200">
      <span>Round</span>
      <span>{round}</span>
    </div>
  );
};

export default RoundCounter;