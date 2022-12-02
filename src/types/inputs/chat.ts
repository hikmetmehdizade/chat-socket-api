import { UUID } from "../scalar";


interface ChatMembersInput {
    userId: UUID,
    isAdmin: boolean
}

export interface CreateChatInput {
  workspaceId: UUID;
  users: ChatMembersInput[];
  isGroup: boolean;
  title?: string;
}
