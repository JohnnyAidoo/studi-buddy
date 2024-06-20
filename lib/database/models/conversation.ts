import { Schema, model, models } from "mongoose";

const ConversationSchema = new Schema({
  clerkId: { type: String, required: true },
  documentId: { type: String, required: true },
  sender: { type: String, required: true },
  message: { type: String, required: true },
});

const Conversation =
  models.Conversation || model("Conversation", ConversationSchema);

export default Conversation;
