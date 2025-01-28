import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import BattleContainer from './components/battle/BattleContainer';
import { useEffect, useState } from 'react';
import { attackerData, defenderData } from './constants/playersData';
import battleImage from '/images/battle_bg.webp';
import borderImage from '/images/header_border.png';

import { socket } from './utils/socket';
import { Player } from './interfaces/Player';

function App() {
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [players, setPlayers] = useState<Player[]>([]);

  const [leftPlayer, setLeftplayer] = useState(attackerData);
  const [rightPlayer, setRightPlayer] = useState(defenderData);
  const [davokarPlayers, setDavokarPlayers] = useState<Player[]>([]);
  const [kaotikaPlayers, setKaotikaPlayers] = useState<Player[]>([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.emit('web-sendUsers');
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('connectedUsers', data => {
      setPlayers(data);
    });

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('connectedUsers');
    }
  }, []);

  useEffect(() => {
    console.log("is conected");
    console.log(isConnected);
  }, [isConnected]);

  useEffect(() => {
    filterPlayers(players)

    console.log("DAVOKAR PLAYERS");
    console.log(davokarPlayers);

    console.log("KAOTIKA PLAYERS");
    console.log(kaotikaPlayers);
  }, [players]);

  async function filterPlayers(players: Player[]) {
    const davokar = players.filter(player => player.loyalty === 'betrayer');
    const kaotika = players.filter(player => player.loyalty === 'loyal');
    setDavokarPlayers(davokar);
    setKaotikaPlayers(kaotika);
  }

  return (
    <div className='w-screen h-screen bg-center bg-cover' style={{ backgroundImage: `url(${battleImage})` }}>

      {/* Background Image */}
      <img src={borderImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />

      {/* Header Container */}
      <HeaderContainer leftPlayer={leftPlayer} rightPlayer={rightPlayer} />
      <BattleContainer />

    </div>
  )
}

export default App