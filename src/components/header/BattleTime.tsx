import {useEffect} from "react";
import useStore from "../../store/store";

interface BattleTimeInterface {

}

const BattleTime: React.FC<BattleTimeInterface> = ({ }) => {
  const { timer, setTimer} = useStore();

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer(1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    if(timer <= 0){
      setTimer(0);
    }
  }, [timer])

  return (
    <div className="flex w-full rounded-md text-5xl justify-center items-center pt-[45%]">
      {timer}
    </div>
  );
};

export default BattleTime;