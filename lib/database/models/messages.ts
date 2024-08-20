import { Schema, model, models } from "mongoose";

const MessagesSchema = new Schema({
  userId: { type: String, required: true },
  groupId: { type: String, required: true },
  content: { type: String },
  createdAt: { type: Date, required: true, default: new Date() },
});

const Messages = models.Messages || model("Messages", MessagesSchema);

export default Messages;
