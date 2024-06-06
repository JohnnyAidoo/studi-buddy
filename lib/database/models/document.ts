import { Schema, model, models } from "mongoose";

const DocumentSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  key: { type: String },
  documentIdFromApi: { type: String, required: true, unique: true },
  documentIdFromStorage: { type: String, required: true },
  Url: { type: String, required: true },
});

const Document = models.Document || model("Document", DocumentSchema);

export default Document;
