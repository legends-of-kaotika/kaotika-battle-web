import { useEffect, useState } from "react";


interface BattleTimeInterface {

}

const BattleTime: React.FC<BattleTimeInterface> = ({ }) => {
  const [timer, setTimer] = useState<number>(30);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer(prevState => prevState -= 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    if(timer <= 0){
      setTimer(0);
    }
  }, [timer])

  return (
    <div className="flex w-full rounded-md text-5xl justify-center items-center pt-[40%]">
      {timer}
    </div>
  );
};

export default BattleTime;