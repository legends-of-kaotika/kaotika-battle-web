/* eslint-disable react-hooks/rules-of-hooks */
import { Player } from '../Interfaces/Player';
import useStore from '../store/store';

const { addDravocar, socket, addKaotika } = useStore();

export const webSendUserHandler = () => {
  socket.on('web-sendUser', (data: Player) => {
    console.log('enter in web-sendUser ' + data);
    if (data.isBetrayer) {
      addDravocar(data);
    } else {
      addKaotika(data);
    }
  });
};