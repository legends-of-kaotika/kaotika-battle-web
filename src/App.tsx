import { useEffect, useState } from 'react';
import './App.css';
import BattleContainer from './components/battle/BattleContainer';
import FinishTurn from './components/battle/finishTurn';
import WaitingBattle from './components/battle/WaitingBattle';
import Hud from './components/footer/Hud';
import HeaderContainer from './components/header/HeaderContainer';
import getPlayerById from './helpers/getPlayerById';
import updatePlayerById from './helpers/updatePlayerById';
import { Player } from './Interfaces/Player';
import { PlayersRole } from './Interfaces/PlayerRole';
import useStore from './store/store';
import battleImage from '/images/battle_bg.webp';

function App() {
  const { players, addKaotika, addDravocar, socket, setPlayers, setDefender, timer, setAttacker} = useStore();
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [startBattle, setStartBattle] = useState<boolean>(false);
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
      console.log('enter in web-sendUser ' + data);
      if(data.isBetrayer){
        addDravocar(data);
      }else{
        addKaotika(data);
      }    
    });

    socket.on('connectedUsers', (data : PlayersRole) => {

      setPlayers(data);
    });

    socket.on('gameStart', () => {
      setStartBattle(true);
    });

    socket.emit('web-sendSocketId');
    socket.emit('web-sendUsers');

    socket.on('web-setSelectedPlayer', (id: string) => {
      setDefender(getPlayerById(players, id)!);
    });

    socket.on('updatePlayer', (id: string, attr: Partial<Player>, totalDamage: number) => {
      console.log('daño: ' + totalDamage);
      setPlayers(updatePlayerById(players, id, attr));
      socket.emit('web-turnEnd');
      setFinishTurn(true);
    });

    socket.on('assign-turn', (id: string) => {
      setAttacker(getPlayerById(players, id)!);
      setFinishTurn(false);
    });

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('connectedUsers');
      socket.off('web-sendUser');
      socket.off('gameStart');
      socket.off('web-setSelectedPlayer');
      socket.off('updatePlayer');
    };
  }, [addDravocar, addKaotika, players, setAttacker, setDefender, setPlayers, socket]);

  useEffect(() => {
    console.log('Connected to socket server: ' + isConnected);
  }, [isConnected]);

  useEffect(() => {
    console.log('PLAYERS: ');
    console.log(players);

  }, [players]);

  useEffect(() => {
    if (timer === 0) {
      socket.emit('web-turnEnd');
      setFinishTurn(true);
    };
  }, [socket, timer]);

  return (
    <div
      className='w-screen h-screen bg-center bg-cover'
      style={{ backgroundImage: `url(${battleImage})` }}>

      {/* Header Container */}
      {startBattle && <HeaderContainer />}
      {/* Battle Container */}
      {startBattle && <BattleContainer />}
      {!startBattle && <WaitingBattle />}

      {finishTurn && startBattle && <FinishTurn />}

      {/* Footer Container */}
      <Hud />
    </div>


  );
}

export default App;