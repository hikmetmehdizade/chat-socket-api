import { SocketEvents, SocketFunc } from "../../types";
import models from "../../models";
const createChat: SocketFunc = (io, socket, next) => {
  socket.on(SocketEvents.createChat, async (data) => {
    const chat = await models.Chat.create({
      title: data.title,
      members: data.members,
    });
    await models.Member.updateMany(
      { _id: chat.members },
      { $push: { chats: chat._id } }
    );

    io.to("room1").emit(SocketEvents.createChat, chat);
  });
};

export default createChat;
