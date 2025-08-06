import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/token.js";

// userRegister

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

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      profilePic,
    });
    await userData.save();

    const token = generateToken(userData._id, "user");

    res.cookie("authtoken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.json({ data: userData, message: "user profile created" });
  } catch (error) {
    // console.log(error)
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error!" });
  }
};

// userLogin

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "all feilds required" });
    }

    const UserExsist = await User.findOne({ email });

    if (!UserExsist) {
      return res.status(400).json({ message: "user not exsists!" });
    }

    const isVerified = await bcrypt.compare(password, UserExsist.password);

    if (!isVerified) {
      return res.status(400).json({ message: "invalid input" });
    }

    const token = generateToken(UserExsist._id, "user");

    res.cookie("authtoken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.json({
      data: UserExsist,
      message: "user login successfully commpleted",
    });
  } catch (error) {
    // console.log(error)
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error!" });
  }
};

export const userUpdate = async (req, res) => {
  try {
    const {name, phone, email, profilePic} = req.body
    const {id} = req.params
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error!" });
  }
};
