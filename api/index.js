import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000!!");
      console.log("connected to MONGO db");
    });
  })
  .catch((err) => console.log(err));

app.use("/api/auth", authRouter);
