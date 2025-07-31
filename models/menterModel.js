import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema({
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
    type: Number,
    required: true,
  },

  profilePic: {
    type: String,
    default:
      "https://www.kindpng.com/picc/m/722-7221920_placeholder-profile-image-placeholder-png-transparent-png.png",
  },

  qualification: {
    type: String,
  },

  experience: {
    type: String,
  },

  role: {
    type: String,
    enum: ["admin", "mentor"],
    default: "mentor",
  },

  isActive: {
    type: Boolean,
    default: true,
  },
});

export const Mentor = mongoose.model("Mentor", mentorSchema);
