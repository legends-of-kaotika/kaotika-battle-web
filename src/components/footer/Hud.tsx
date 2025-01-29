import { useState, useEffect } from 'react';
import PlayerAvatar from './PlayerAvatar';
import { Player} from '../../Interfaces/Player';

interface HudProps {
  players: Player[];
}

const Hud: React.FC<HudProps> = ({players}) => {

  const [loyal,setLoyal] = useState<Player[]>([]);
  const [betrayer,setBetrayer] = useState<Player[]>([]);

  useEffect(() => {
    const betrayers = players.filter(player => player.isBetrayer);
    const loyals = players.filter(player => !player.isBetrayer);

    setBetrayer(betrayers);
    setLoyal(loyals);
  }, [players]);
  
  return (

    <div>
    {/*  HUD */}
    <div className="w-full max-h-[40%] fixed bottom-0 p-4 flex items-stretch justify-between ">

      {/*  Loyal  */}
      <div className="flex flex-col items-center justify-start w-[46%] border-r-2 border-white p-2">
        <h2 className="text-4xl mb-2">KAOTIKA</h2>
        <div className="flex flex-wrap justify-center h-full overflow-y-auto">
          {loyal.map((player, index) => (
            <div key={index} className="m-1">
              <PlayerAvatar player={player}/>
            </div>
          ))}
        </div>
      </div>

      {/* VS */}
      <div className="flex items-center justify-center w-[8%] border-x-2 border-white">
        <h2 className="text-4xl">VS</h2>
      </div>

      {/* Betrayers  */}
      <div className="flex flex-col items-center justify-start w-[46%] border-l-2 border-white p-2">
        <h2 className="text-4xl mb-2">DRAVOCAR</h2>
        <div className="flex flex-wrap justify-center h-full overflow-y-auto">
          {betrayer.map((player, index) => (
            <div key={index} className="m-1">
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


