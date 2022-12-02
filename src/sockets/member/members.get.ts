import { SocketEvents, SocketFunc } from "../../types";
import models from "../../models";

const getMembers: SocketFunc = (io, socket, next) => {
  socket.on(SocketEvents.getMembers, async () => {
    const members = await models.Member.find({}).populate("chats");

    io.to("room1").emit(SocketEvents.getMembers, members);
  });
};

export default getMembers;
