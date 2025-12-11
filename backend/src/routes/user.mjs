import { Router } from "express";
import loginAttempt from "../middleware/loginAttempt.js";
import signupAttempt from "../middleware/signupAttempt.js";
import User from "../models/User.mjs";
import crypto from "crypto";
import { rateLimit } from "express-rate-limit";

const userRouter = Router();
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 10,
  message: "Too many login attempts, try again later!",
});
userRouter.post("/login", limiter, loginAttempt, (req, res) => {
  try {
    let { user, authOptions } = req;
    const mongooseUser = new User(user);
    const token = mongooseUser.generateToken(authOptions.accessTokenExpiresIn);
    const cookieMaxAgeMs = authOptions.cookieMaxAgeMs;
    req.session.token = token;
    req.sessionOptions.maxAge = cookieMaxAgeMs;
    delete user.password;
    delete user.__v;
    delete user.createdAt;
    delete user.role;
    user._id = user._id.toString();
    const csrfToken = crypto.randomBytes(32).toString("hex");
    res.cookie("XSRF-TOKEN", csrfToken, {
      maxAge: cookieMaxAgeMs,
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
    res.status(200).json({
      message: "Login successful",
      user: user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
});

userRouter.post("/signup", signupAttempt, async (req, res) => {
  try {
    const user = req.body;
    // Check if email already exists
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }
    const newUser = new User(user);
    await newUser.save();
    const token = newUser.generateToken(24 * 60 * 60 * 1000); // 1 day
    req.session.token = token;
    req.sessionOptions.maxAge = 2 * 60 * 60 * 1000;
    delete user.password;
    delete user.__v;
    delete user.createdAt;
    delete user.confirm_password;
    user._id = newUser._id.toString();
    res.status(201).json({ message: "User created successfully", user: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

userRouter.post("/logout", (req, res) => {
  req.session = null;
  res.clearCookie("XSRF-TOKEN");
  res.status(200).json({ message: "Logged out successfully" });
});

export default userRouter;
