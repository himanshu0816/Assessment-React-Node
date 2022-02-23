const mongoose = require("mongoose");
const validator = require("validator");

// Schema creation for db

const userSchema = new mongoose.Schema({
  Fname: {
    type: String,
    required: true,
    trim: true,
  },
  Lname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    index: { unique: true },
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Please enter a valid email");
      }
    },
  },
  Phone: {
    type: Number,
    required: true,
    trim: true,
  },
  Password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Password cannot contain "Password"');
      }
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User: User };
