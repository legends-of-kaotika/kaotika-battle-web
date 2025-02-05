import { useEffect, useState } from 'react';
import { Player } from '../Interfaces/Player';
import { PlayersRole } from '../Interfaces/PlayerRole';
import getPlayerById from '../helpers/getPlayerById';
import updatePlayerById from '../helpers/updatePlayerById';
import useStore from '../store/store';

export const useSocketListeners = () => {
  const { players, socket, setPlayers, setDefender, timer, setAttacker, addDravocar, addKaotika } = useStore();
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [startBattle, setStartBattle] = useState<boolean>(true);
  const [finishTurn, setFinishTurn] = useState<boolean>(false);

  useEffect(() => {
    socket.emit('web-sendSocketId');
    socket.emit('web-sendUsers');
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

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function webSendUser(data: Player){
      if (data.isBetrayer) {
        addDravocar(data);
      } else {
        addKaotika(data);
      }
    }

    function connectedUsers(data: PlayersRole) {
      setPlayers(data);
    }

    function gameStart(){
      setStartBattle(true);
    }

    function webSelectedPlayer(id: string) {
      setDefender(getPlayerById(players, id)!);
    }

    function updatePlayer(id: string, attr: Partial<Player>, totalDamage: number) {
      console.log('daño: ' + totalDamage);
      setPlayers(updatePlayerById(players, id, attr));
      socket.emit('web-turnEnd');
      setFinishTurn(true);
    }

    function assignTurn(id: string) {
      setAttacker(getPlayerById(players, id)!);
      setFinishTurn(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('web-sendUser', webSendUser);
    socket.on('connectedUsers', connectedUsers);
    socket.on('gameStart', gameStart);
    socket.on('web-setSelectedPlayer', webSelectedPlayer);
    socket.on('updatePlayer', updatePlayer);
    socket.on('assign-turn', assignTurn);

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

  return { startBattle, finishTurn };
};
