import { useEffect } from 'react';
import useStore from '../../store/store';

const BattleTime = () => {
  const { timer, setTimer, socket } = useStore();

  useEffect(() => {
    socket.on('send-timer', (timer: number) => {
      setTimer(timer);
    });

    return () => {
      socket.off('send-timer');
    };
  }, [socket, setTimer]);

  return (
    <div className="flex w-full rounded-md text-5xl justify-center items-center pt-[45%]">
      {timer !== -1 ? timer : null}
    </div>
  );
};

export default BattleTime;