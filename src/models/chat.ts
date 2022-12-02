import { Schema, model, Types } from "mongoose";

const chatSchema = new Schema(
  {
    title: {
      type: String,
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
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

chatSchema.pre('save', (next) => {
    
    
    next()
})

export default model("Chat", chatSchema);
