import { useEffect, useState } from 'react';
import { Player } from '../Interfaces/Player';
import getPlayerById from '../helpers/getPlayerById';
import updatePlayerById from '../helpers/updatePlayerById';
import useStore from '../store/store';
import { connectedUsersHandler } from './connectedUsersHandler';
import { webSendUserHandler } from './webSendUserHandler';
import { webSelectedPlayerHandler } from './webSelectedPlayer';

export const useSocketListeners = () => {
  const { players, socket, setPlayers, timer, setAttacker } = useStore();
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [startBattle, setStartBattle] = useState<boolean>(false);
  const [finishTurn, setFinishTurn] = useState<boolean>(false);

  useEffect(() => {
    socket.emit('web-sendSocketId');
    socket.emit('web-sendUsers');
  }, []);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('gameStart', () => {
      setStartBattle(true);
    });

    //Add kaotika and dravocar
    webSendUserHandler();

    //Connected users handler
    connectedUsersHandler();

    //Web selected player handler
    webSelectedPlayerHandler();

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
  }, []);

  useEffect(() => {
    console.log('Connected to socket server: ' + isConnected);
  }, [isConnected]);

  useEffect(() => {
    if (timer === 0) {
      socket.emit('web-turnEnd');
      setFinishTurn(true);
    };
  }, [socket, timer]);

  return { startBattle, finishTurn };
};
