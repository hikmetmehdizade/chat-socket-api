export enum SocketEvents {
  connection = "connection",

  createChat = "chat:create",
  updateChat = "chat:update",
  deleteChat = "chat:delete",
  getChats = "chats:get",

  createMessage = "message:create",
  updateMessage = "message:update",
  messageDelete = "message:delete",

  createMember = "member:create",
  getMembers = "members:get",
}
