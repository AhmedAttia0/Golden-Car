import express from "express";
import { connect } from "mongoose";
import carRotuer from "./src/routes/cars.mjs";
import settingsRouter from "./src/routes/settings.mjs";
import bookingRouter from "./src/routes/booking.mjs";
import User from "./src/models/User.mjs";
import validateToken from "./src/middleware/auth";
import userRouter from "./src/routes/user.mjs";
import cookieSession from "cookie-session";
import path from "path";
const port = 3000;

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
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use("/cars", carRotuer);
app.use("/users", userRouter);
app.get("/", validateToken, async (req, res) => {
  try {
    const userDoc = await User.findById(req.id).lean(); // plain JS object
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
app.use("/settings", settingsRouter);
app.use("/booking", bookingRouter);

app.listen(port, () => console.log("Server listening on port ", port));
