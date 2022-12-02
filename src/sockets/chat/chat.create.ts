import { CreateChatInput, SocketEvents, SocketFunc } from "../../types";
import models from "../../models";
const createChat: SocketFunc = (io, socket, next) => {
  socket.on(SocketEvents.createChat, async (data: CreateChatInput) => {
    const { isGroup, workspaceId, title, users } = data;

    const chat = await models.Chat.create({
      title,
      isGroup,
      workspaceId,
    });
    const chatMembers = users.map((item) => ({ ...item, chat: chat._id }));

    const members = await models.Member.create(chatMembers);

 const updatedChat =   await models.Chat.findByIdAndUpdate(chat._id, {$push: {members: members.map(item => item._id) }})



        io.to("room1").emit(SocketEvents.createChat, updatedChat);




  });
};

export default createChat;
