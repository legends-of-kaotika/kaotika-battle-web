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
    <div className="flex h-1/2 w-full rounded-md mt-[1%] text-5xl justify-center items-center">
      {timer}
    </div>
  );
};

export default BattleTime;