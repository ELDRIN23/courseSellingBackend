import { User } from "../models/userModel.js";
import bcrypt from "bcrypt"

export const userRegister = async (req, res) => {
  try {
    const { name, email, password, phone, profilePic } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).json({ message: "all feilds required" });
    }

    const isUserExsist = await User.findOne({ email });

    if (isUserExsist) {
      return res.status(400).json({ message: "user already exsists" });
    }
     if (!isUserExsist) {
      return res.status(400).json({ message: "register to continue" });
    }

    // const hashedPassword = 

    const userData = new User({name, email, password, profilePic})
    await userData.save();

    return  res.json({data: userData, message:"user profile created"});

  } catch (error) {
    // console.log(error) 
    res.status(error.statusCode || 500).json({message: error.message || "internal server error!"})
  }
};
