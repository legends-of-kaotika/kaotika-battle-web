import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import BattleContainer from './components/battle/BattleContainer';
import { useEffect, useState } from 'react';
import { attackerData, defenderData } from './constants/playersData';
import battleImage from '/images/battle_bg.webp';
import borderImage from '/images/header_border.png';
import Hud from './components/footer/Hud';

import { socket } from './utils/socket';
import { Player } from './Interfaces/Player';

function App() {
  const leftPlayer= attackerData;
  const rightPlayer = defenderData;

  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [players, setPlayers] = useState<Player[]>([]);


  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    socket.on('web-sendUser', (data: Player) => {
      setPlayers(prevState => [...prevState, data]);
    });

    socket.on('connectedUsers', (data : Player[]) => {
      setPlayers(data);
    });

    socket.emit('web-sendSocketId');

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('connectedUsers');
      socket.off('web-sendUser');
    }
  }, []);

  useEffect(() => {
    console.log('Connected to socket server: ' + isConnected);
  }, [isConnected])

  useEffect(() => {
    console.log("PLAYERS: ");
    console.log(players);
  }, [players]);

  return (
    <div className='w-screen h-screen bg-center bg-cover' style={{ backgroundImage: `url(${battleImage})` }}>

      {/* Background Image */}
      <img src={borderImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />

      {/* Header Container */}
      <HeaderContainer leftPlayer={leftPlayer} rightPlayer={rightPlayer} />
      <BattleContainer leftPlayer={leftPlayer} rightPlayer={rightPlayer} />

      {/* Footer Container */}
      <Hud />
    </div>


  )
}

export default App