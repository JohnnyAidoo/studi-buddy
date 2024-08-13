import { Schema, model, models } from "mongoose";

const UserGroupSchema = new Schema({
  user_id: { type: String, required: true },
  Usergroup_id: { type: String, required: true },
  role: { type: String },
  joined_at: { type: Date, default: new Date() },
});

const UserGroup = models.UserGroup || model("UserGroup", UserGroupSchema);

export default UserGroup;
