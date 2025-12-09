import { Router } from "express";
import loginAttempt from "../middleware/loginAttempt";

const userRouter = Router();

userRouter.post("/users/login", loginAttempt, (req, res) => {
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

export default userRouter;
