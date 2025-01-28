import { io } from "socket.io-client";

const URL = 'https://kaotika-battle-server.onrender.com';

export const socket = io(URL);