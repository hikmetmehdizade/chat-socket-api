import { SocketEvents, SocketFunc } from "../../types";

const createMessage: SocketFunc = (io, socket, next) => {
  socket.on(SocketEvents.createMessage, async (data) => {
    io.to("").emit(SocketEvents.createMessage, data);
  });
};

export default createMessage;
