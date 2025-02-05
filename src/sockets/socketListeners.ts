import { useEffect, useState } from 'react';
import { Player } from '../Interfaces/Player';
import { PlayersRole } from '../Interfaces/PlayerRole';
import getPlayerById from '../helpers/getPlayerById';
import updatePlayerById from '../helpers/updatePlayerById';
import { deletePlayerById } from '../helpers/utils';
import useStore from '../store/store';
import { socketName } from './socketConstants';

export const useSocketListeners = () => {
  const { players, socket, setPlayers, setDefender, timer, setAttacker, addDravocar, addKaotika, attacker } = useStore();
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
      console.log('SEND TURN END SOCKET');
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
      console.log('enter in send user' + data);
      if (data.isBetrayer) {
        addDravocar(data);
      } else {
        addKaotika(data);
      }
    }

    function connectedUsers(data: PlayersRole) {
      console.log('conected users ' + data);
      setPlayers(data); 
    }

    function gameStart(){
      console.log('enter in socket gameStart');

      setStartBattle(true);
    }

    function webSelectedPlayer(id: string) {
      console.log('enter in selected player');


      setDefender(getPlayerById(players, id)!);
    }

    function updatePlayer(id: string, attr: Partial<Player>, totalDamage: number) {
      console.log('daño: ' + totalDamage);
      setPlayers(updatePlayerById(players, id, attr));
      socket.emit('web-turnEnd');
      setFinishTurn(true);
    }

    function assignTurn(id: string) {
      console.log('assign turn to next person');

      setAttacker(getPlayerById(players, id)!);
      console.log('ATTACKER');
      console.log(attacker?.name);
      
      setFinishTurn(false);
    }

    function deletePlayer(id: string) : void{
      console.log('remove player with the id ' + id);
      setPlayers(deletePlayerById(players, id));
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('web-sendUser', webSendUser);
    socket.on('connectedUsers', connectedUsers);
    socket.on('gameStart', gameStart);
    socket.on('web-setSelectedPlayer', webSelectedPlayer);
    socket.on('updatePlayer', updatePlayer);
    socket.on('assign-turn', assignTurn);
    socket.on('removePlayer', deletePlayer);

    console.log(players);

    return () => {
      socket.off(socketName.CONNECT, onConnect);
      socket.off(socketName.DISCONNECT, onDisconnect);
      socket.off('connectedUsers');
      socket.off('web-sendUser');
      socket.off('gameStart');
      socket.off('web-setSelectedPlayer');
      socket.off('updatePlayer');
      socket.off('assign-turn');
      socket.off('removePlayer');
      
    };
  }, [players]);

  return { startBattle, finishTurn };
};
