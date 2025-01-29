import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import BattleContainer from './components/battle/BattleContainer';
import { useEffect, useState } from 'react';
import { attackerData, defenderData } from './constants/playersData';
import battleImage from '/images/battle_bg.webp';
import borderImage from '/images/header_border.png';
import Hud from './components/footer/Hud';
import { Player } from './Interfaces/Player';
import useStore from './store/store';
import WaitingBattle from './components/battle/WaitingBattle';

function App() {
  const leftPlayer= attackerData;
  const rightPlayer = defenderData;
  const { players, addPlayer, socket} = useStore();
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [startBattle, setStartBattle] = useState<boolean>(true);

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
      console.log("enter in web-sendUser " + data);
      addPlayer(data);
    });

    // socket.on('connectedUsers', (data : Player[]) => {  
    // });

    socket.on('web-startBattle', () => {
      setStartBattle(true);
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
        className="absolute top-0 left-0 z-10 w-full"
      />

     

      {/* Header Container */}
      <HeaderContainer leftPlayer={leftPlayer} rightPlayer={rightPlayer} />
      {/* Battle Container */}
      {startBattle && <BattleContainer leftPlayer={leftPlayer} rightPlayer={rightPlayer} />}
      {!startBattle && <WaitingBattle/>}

      {/* Footer Container */}
      <Hud players={players}/>
    </div>


  )
}

export default App