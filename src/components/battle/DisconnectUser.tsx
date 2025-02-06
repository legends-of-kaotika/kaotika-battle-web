import 'animate.css';
import React, { useEffect, useState } from 'react';
import useStore from '../../store/store';

const DisconnectUser: React.FC = () => {
  const { disconnectedPlayer } = useStore();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (disconnectedPlayer) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [disconnectedPlayer]);

  return (
    isVisible ? (
      <div
        key={disconnectedPlayer}
        className='flex flex-col absolute bottom-[50%] h-[10%] w-[15%] justify-center bg-[#00000099] animate__animated animate__backOutUp animate__delay-2s'
        style={{ animationDuration: '2s' }}
      >
        <p className='text-2xl text-red-400'>{disconnectedPlayer}</p>
        <span className='text-2xl text-red-400'> has been disconnected!</span>
      </div>
    ) : null
  );
};

export default DisconnectUser;