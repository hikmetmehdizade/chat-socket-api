import { SocketEvents, SocketFunc } from "../../types";
import models from "../../models";

const createMember: SocketFunc = (io, socket, next) => {
  socket.on(SocketEvents.createMember, async (data) => {
    const member = await models.Member.create({ name: data.name });

    io.to("room1").emit(SocketEvents.createMember, member);
  });
};

export default createMember;
