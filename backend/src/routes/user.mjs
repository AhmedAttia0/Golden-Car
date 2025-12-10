import { Router } from "express";
import loginAttempt from "../middleware/loginAttempt";
import signupAttempt from "../middleware/signupAttempt";
import User from "../models/User.mjs";

const userRouter = Router();

userRouter.post("/login", loginAttempt, (req, res) => {
  try {
    const { user, authOptions } = req;
    const token = user.generateToken(authOptions.accessTokenExpiresIn);
    const cookieMaxAgeMs = authOptions.cookieMaxAgeMs;
    req.session.token = token;
    req.session.user = {
      id: user._id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    };
    req.sessionOptions.maxAge = cookieMaxAgeMs;
    res.json({ user: req.session.user, token });
  } catch (err) {
    res.status(500).json({ error: "Login Failed" });
  }
});

userRouter.post("/signup", signupAttempt, async (req, res) => {
  try {
    const user = req.user;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }
    const newUser = new User(user);
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default userRouter;
