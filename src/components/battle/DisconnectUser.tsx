import 'animate.css';
import React from 'react';
import useStore from '../../store/store';

const DisconnectUser: React.FC = () => {
  const { disconnectedPlayer } = useStore();
  return (
    disconnectedPlayer ? (
      <div
        className='flex flex-col absolute bottom-[20%] h-[10%] w-[15%] justify-center bg-[#00000099] animate__animated animate__backOutUp animate__delay-3s'
        style={{ animationDuration: '2s' }}
      >
        <p className='text-2xl text-red-400'>{disconnectedPlayer}</p>
        <span className='text-2xl text-red-400'> has been disconnected!</span>
      </div>
    ) : null
  );
};

export default DisconnectUser;