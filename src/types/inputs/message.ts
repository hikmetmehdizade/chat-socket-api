import {UUID} from '../scalar';



export interface CreateMessageInput {
    createdById: UUID;
    text: string;
    chatId: UUID;
}