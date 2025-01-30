import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import BattleContainer from './components/battle/BattleContainer';
import { useEffect, useState } from 'react';
import { attackerData, defenderData } from './constants/playersData';
import battleImage from '/images/battle_bg.webp';
import Hud from './components/footer/Hud';
import { Player } from './Interfaces/Player';
import useStore from './store/store';
import WaitingBattle from './components/battle/WaitingBattle';
import getPlayerById from './helpers/getPlayerById';
import FinishTurn from './components/battle/finishTurn';

function App() {
  const leftPlayer = attackerData;
  const rightPlayer = defenderData;
  const { players, addPlayer, socket, setPlayers, setDefender, timer} = useStore();
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [startBattle, setStartBattle] = useState<boolean>(true);
  const [finishTurn, setFinishTurn] = useState<boolean>(false);

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

    socket.on('connectedUsers', (data : Player[]) => {
      setPlayers(data);
    });

    socket.on('gameStart', () => {
      setStartBattle(true);
    });

    socket.emit('web-sendSocketId');
    socket.emit('web-sendUsers');

    socket.on('web-setSelectedPlayer', (id : string) => {
      setDefender(getPlayerById(players, id)!);
    });

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('connectedUsers');
      socket.off('web-sendUser');
      socket.off('gameStart');
      socket.off('web-setSelectedPlayer');
    }
  }, []);

  useEffect(() => {
    console.log('Connected to socket server: ' + isConnected);
  }, [isConnected])

  useEffect(() => {
    console.log("PLAYERS: ");
    console.log(players);
  }, [players]);

  
  const finishTurnHandler = () => {
    socket.emit('turn_end');
    setFinishTurn(true);  
  }
  if(timer === 0){
    finishTurnHandler();
  }
 
  return (
    <div className='w-screen h-screen bg-center bg-cover' style={{ backgroundImage: `url(${battleImage})` }}>

      {/* Header Container */}
      <HeaderContainer leftPlayer={leftPlayer} rightPlayer={rightPlayer} />

      {/* Battle Container */}
      {startBattle ? <BattleContainer leftPlayer={leftPlayer} rightPlayer={rightPlayer} /> : <WaitingBattle/>}

      {finishTurn && <FinishTurn/>}

      {/* Footer Container */}
      <Hud players={players}/>
      
    </div>


  )
}

export default App