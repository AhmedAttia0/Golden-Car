import express from "express";
import { connect } from "mongoose";
connect(
  "mongodb+srv://mostafamozakiii_db_user:i9hpIDVe5uSEzaPg@cluster0.tcmujto.mongodb.net/?appName=Golden_Car&retryWrites=true&w=majority"
)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const app = express();
app.use(express.json());
app.listen(3000, () => console.log("Server listening on port 3000"));
