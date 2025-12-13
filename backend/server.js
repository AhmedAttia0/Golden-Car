import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connect } from "mongoose";
import carRotuer from "./src/routes/cars.mjs";
import settingsRouter from "./src/routes/settings.mjs";
import adminRouter from "./src/routes/admin.mjs";
import bookingRouter from "./src/routes/booking.mjs";
import User from "./src/models/User.mjs";
import validateToken from "./src/middleware/auth.mjs";
import userRouter from "./src/routes/user.mjs";
import cookieSession from "cookie-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import "./src/config/cloudinary.js";

const uri = process.env.MONGO_URI;
const port = process.env.PORT || 5000;
console.log({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
  cloud: process.env.CLOUD_NAME,
});

connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const app = express();

// Helmet + Content Security Policy
const isProd = process.env.NODE_ENV === "production";
const frontendOrigin = process.env.FRONTEND_URL;
const connectSrc = ["'self'"];
if (frontendOrigin) connectSrc.push(frontendOrigin);
const corsOptions = {
  sameSite: "none",
  secure: true,
  origin: frontendOrigin ? frontendOrigin.replace(/\/$/, "") : undefined,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "X-CSRF-Token", "X-XSRF-TOKEN"],
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'https://golden-car-one.vercel.app'"],
      scriptSrc: ["'https://golden-car-one.vercel.app'"],
      styleSrc: [
        "'https://golden-car-one.vercel.app'",
        "https://fonts.googleapis.com",
      ],
      imgSrc: ["'https://golden-car-one.vercel.app'", "data:"],
      connectSrc: connectSrc,
      fontSrc: ["'https://golden-car-one.vercel.app'"],
      objectSrc: ["'none'"],
      frameAncestors: ["'none'"],
      baseUri: ["'https://golden-car-one.vercel.app'"],
      formAction: ["'https://golden-car-one.vercel.app'"],
      upgradeInsecureRequests: [],
    },
    // during development we use reportOnly to avoid breaking the app while tuning
    reportOnly: !isProd,
  })
);
app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_SECRET],
    maxAge: 2 * 60 * 60 * 1000,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    },
  })
);
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use("/cars", carRotuer);
app.use("/user", userRouter);
app.use("/settings", settingsRouter);
app.use("/admin", adminRouter);
app.use("/booking", bookingRouter);
app.get("/", validateToken, async (req, res) => {
  try {
    const userDoc = await User.findById(req.id).lean(); // plain JS object
    if (!userDoc) {
      return res.status(404).json({ message: "User not found" });
    }
    const { password, createdAt, __v, role, ...rest } = userDoc;
    return res.status(200).json({ message: "Authenticated", user: rest });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

app.listen(port, () => console.log("Server listening on port ", port));
