import mongoose, { SchemaTypes, Types } from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: SchemaTypes.String,
    },
    chats: [
      {
        type: Types.ObjectId,
        ref: "Chat",
      },
    ],
  },
  {
    _id: true,
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

export default mongoose.model("Member", memberSchema);
