import { Schema, model, SchemaTypes, Types } from "mongoose";
import Chat from "./chat";
import Member from "./member";

const messageSchema = new Schema(
  {
    text: {
      type: SchemaTypes.String,
      required: true,
    },
    createdBy: {
      type: Types.ObjectId,
      ref: Member,
    },
    chat: {
      type: Types.ObjectId,
      ref: 'Chat',
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

export default model("Message", messageSchema);
