const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please, provide your username"]
  },
  email: {
    type: String,
    required: [true, "Please, provide your email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please, provide your password"]
  }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;