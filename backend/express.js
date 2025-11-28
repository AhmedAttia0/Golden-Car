import express from "express";
import { connect } from "mongoose";
import carRotuer from "./src/routes/cars.mjs";
import settingsRouter from "./src/routes/settings.mjs";
connect(
  "mongodb+srv://mostafamozakiii_db_user:i9hpIDVe5uSEzaPg@cluster0.tcmujto.mongodb.net/Golden_Car?appName=Golden_Car&retryWrites=true&w=majority"
)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const app = express();
app.use(express.json());
app.use("/cars", carRotuer);
app.use("/settings", settingsRouter);

app.listen(3000, () => console.log("Server listening on port 3000"));
