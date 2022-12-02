import { SocketEvents, SocketFunc } from "../../types";

const getChats: SocketFunc = (io, socket, next) => {
  socket.on(SocketEvents.getChats, async (data) => {
    io.to("room1").emit(SocketEvents.getChats, data);
  });
};

export default getChats;
