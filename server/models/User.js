import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
   nickname: {
      type: String,
      required: true,
      unique: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
   }
});

const UsersModel = mongoose.model("usersModel", usersSchema);

export default UsersModel;