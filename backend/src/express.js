import express from "express";
import { connect } from "mongoose";
import carRotuer from "./routes/cars.mjs";
import userRouter from "./routes/user.mjs";
import validateToken from "./middleware/auth";
import User from "./models/User.mjs";
import cookieSession from "cookie-session";
connect(process.env.DB_LINK)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const app = express();
app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_SECRET],
    maxAge: 2 * 60 * 60 * 1000,
  })
);
app.use("/cars", carRotuer);
app.use("/users", userRouter);
app.get("/", validateToken, async (req, res) => {
  try {
    const userDoc = await User.findById(req.userId).lean(); // plain JS object
    if (!userDoc) {
      return res.status(404).json({ message: "User not found" });
    }
    const { password, role, _id, ...rest } = userDoc;
    const sanitizedUser = { id: _id, ...rest };
    return res.status(200).json({ user: sanitizedUser });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});
app.listen(3000, () => console.log("Server listening on port 3000"));
