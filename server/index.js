import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import todoRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/tasks", todoRoutes);

mongoose.connect(
  "mongodb://localhost:27017/Todolist",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useFindAndModify : false
  },
  (err) => {
    if (err) console.log(`Error in DB Connection ${err}`);
    console.log(`MongoDB Connection Suceeded...`);
  }
);

app.listen(9000, () => console.log(" server started"));
