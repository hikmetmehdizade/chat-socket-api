import { SocketFunc, SocketEvents } from "../../types";

import models from "../../models";

const getMessages: SocketFunc = (io, socket) => {
  socket.on(SocketEvents.getMessages, async () => {
    const messages = await models.Message.find(
      {},
      {},
      {
        populate: [{ model: models.Member, path: "createdBy" }],
      }
    );
    io.to("room1").emit(SocketEvents.getMessages, messages);
  });
};

export default getMessages;
