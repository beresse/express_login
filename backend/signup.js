const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  firstName:{ type: String, unique: true },
  surname: { type: String, unique: false },
  birth: Number,
});

const signupModel = mongoose.model("signup", signupSchema);

module.exports = signupModel;

// ### Signup

// Cette page doit avoir:

// - un champs `email`
// - un champs `password`
// - un champs `confirm password`
// - un champs `firstName`
// - un champs `surname`
// - et un champs `date of birth`