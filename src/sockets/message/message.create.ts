import { CreateMessageInput, SocketEvents, SocketFunc } from "../../types";
import models from '../../models';

const createMessage: SocketFunc = (io, socket, next) => {
    socket.on(SocketEvents.createMessage, async (data: CreateMessageInput) => {

        const {chatId, createdById, text} = data;
        await models.Message.create({
            text,
            createdBy: createdById,
            chat: chatId
        }, (error, result) => {
            models.Chat.updateOne({_id: chatId}, {$push: {messages: result}}).then(() => {

            io.to("room1").emit(SocketEvents.createMessage, result);
            })
        })


  });
};

export default createMessage;
