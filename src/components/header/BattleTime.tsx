import { useEffect } from 'react';
import useStore from '../../store/store';

const BattleTime = () => {
  const { timer, setTimer, socket } = useStore();

  useEffect(() => {
    socket.on('send-timer', (timer: number) => {
      console.log(`timer : ${timer}`);
      setTimer(timer);
    });

    return () => {
      socket.off('send-timer');
    };
  }, [socket, setTimer]);

  return (
    <div className="flex w-full rounded-md text-5xl justify-center items-center pt-[45%]">
      {timer}
    </div>
  );
};

export default BattleTime;