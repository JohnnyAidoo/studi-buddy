import { Schema, model, models } from "mongoose";

const GroupsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  created_at: { type: Date, required: true, default: new Date() },
});

const Groups = models.Group || model("Group", GroupsSchema);

export default Groups;
