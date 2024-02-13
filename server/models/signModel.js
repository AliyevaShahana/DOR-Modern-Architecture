const mongoose = require("mongoose");
const { Schema } = mongoose;

const signSchema = new Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
    // imgUrl: { type: String, required: true },
  },
  { timestamps: true }
);
const SignUsers = mongoose.model("SignUsers", signSchema);

module.exports = SignUsers;
