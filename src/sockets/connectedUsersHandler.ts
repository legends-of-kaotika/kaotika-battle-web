/* eslint-disable react-hooks/rules-of-hooks */
import { PlayersRole } from '../Interfaces/PlayerRole';
import useStore from '../store/store';

const { setPlayers, socket } = useStore();

export const connectedUsersHandler = () => {
  socket.on('connectedUsers', (data : PlayersRole) => {
    console.log(data);
    setPlayers(data);
  });
};