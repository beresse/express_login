const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: {type: String },
  firstName:{ type: String, unique: true },
  surname: { type: String, unique: false },
  birth: Date,
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;



// ### Signup

// Cette page doit avoir:

// - un champs `email`
// - un champs `password`
// - un champs `confirm password`
// - un champs `firstName`
// - un champs `surname`
// - et un champs `date of birth`