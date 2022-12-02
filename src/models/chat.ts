import { Schema, model, Types, SchemaTypes } from "mongoose";

const chatSchema = new Schema(
  {
    title: {
      type: SchemaTypes.String,
    },
    isGroup: {
      type: SchemaTypes.Boolean,
      default: false,
    },
    workspaceId: {
      type: SchemaTypes.UUID,
    },
    messages: [
      {
        type: Types.ObjectId,
        ref: "Message",
      },
    ],
    members: [
      {
        type: Types.ObjectId,
        ref: "Member",
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

chatSchema.pre("save", (next) => {
  next();
});

export default model("Chat", chatSchema);
