import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
    minLen: 8,
  },

  phone: {
    type: String,
    required: true,
  },

  profilePic: {
    type: String,
    default:
      "https://www.kindpng.com/picc/m/722-7221920_placeholder-profile-image-placeholder-png-transparent-png.png",
  },

  isActive: {
    type: Boolean,
    default: true,
  },
});

export const User = mongoose.model("User", userSchema);
