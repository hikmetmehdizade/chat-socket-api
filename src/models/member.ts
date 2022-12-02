import mongoose, { SchemaTypes, Types } from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    userId: {
      type: SchemaTypes.UUID,
    },
    isAdmin: {
      type: SchemaTypes.Boolean,
      default: false,
    },
    chat: {
      type: Types.ObjectId,
      ref: "Chat",
    },
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
