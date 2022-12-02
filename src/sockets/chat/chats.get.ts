import models from "../../models";
import { SocketEvents, SocketFunc } from "../../types";

const getChats: SocketFunc = (io, socket, next) => {
  socket.on(SocketEvents.getChats, async (data) => {
      const chats = await models.Chat.find({}, {}, { populate: ["members", "messages"] });

    io.to("room1").emit(SocketEvents.getChats, chats);
  });
};

export default getChats;
