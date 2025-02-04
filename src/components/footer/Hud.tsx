import React from 'react';
import useStore from '../../store/store';
import PlayerAvatar from './PlayerAvatar';

const Hud: React.FC = () => {

  const { players} = useStore();

  return (

    <div>
      {/*  HUD */}
      <div className="w-full max-h-[40%] fixed bottom-0 p-4 flex items-stretch justify-between ">

        {/*  Kaotika  */}
        <div className="flex flex-col items-center justify-start w-[46%] border-r-2 border-white p-2">
          <h2 className="text-4xl mb-2">KAOTIKA</h2>
          <div className="flex flex-wrap justify-center h-full overflow-y-auto">
            {players?.kaotika.map((player, index) => (
              <div
                key={index}
                className="m-1">
                <PlayerAvatar player={player} />
              </div>
            ))}
          </div>

        </div>
        
        {/* VS */}
        <div className="flex items-center justify-center w-[8%] border-x-2 border-white">
          <h2 className="text-4xl">VS</h2>

        </div>

        {/* Dravocar  */}
        <div className="flex flex-col items-center justify-start w-[46%] border-l-2 border-white p-2">
          <h2 className="text-4xl mb-2">DRAVOCAR</h2>
          <div className="flex flex-wrap justify-center h-full overflow-y-auto">
            {players?.dravocar.map((player, index) => (
              <div
                key={index}
                className="m-1">
                <PlayerAvatar player={player} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );

};

export default Hud;


