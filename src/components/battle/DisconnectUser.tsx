import React from 'react';
import useStore from '../../store/store';

const DisconnectUser: React.FC = () => {
  const { disconnectedPlayer } = useStore();
  return (
    <div className='flex flex-col absolute bottom-[20%] h-[10%] w-[15%] justify-center bg-[#00000099]'>
      <p className='text-2xl text-red-400'>{disconnectedPlayer}</p>
      <span className='text-2xl text-red-400'> has been disconnected!</span>
    </div>
  );
};

export default DisconnectUser;