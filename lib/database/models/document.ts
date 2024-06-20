import { Schema, model, models } from "mongoose";

const DocumentSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  key: { type: String },
  documentIdFromStorage: { type: String, required: true },
  Url: { type: String, required: true },
});

const Document = models.Document || model("Document", DocumentSchema);

export default Document;
