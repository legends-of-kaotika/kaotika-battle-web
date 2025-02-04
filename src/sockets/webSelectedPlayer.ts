/* eslint-disable react-hooks/rules-of-hooks */
import getPlayerById from '../helpers/getPlayerById';
import useStore from '../store/store';

const { setDefender, socket, players } = useStore();

export const webSelectedPlayerHandler = () => {
  socket.on('web-setSelectedPlayer', (id: string) => {
    setDefender(getPlayerById(players, id)!);
  });
};