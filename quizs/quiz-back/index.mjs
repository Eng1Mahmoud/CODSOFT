import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import userRoute from  "./routes/user.mjs"
import testRoute from "./routes/test.mjs"
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
// set maximum payload size to 50MB
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(express.json());
// conect db 

 mongoose
  .connect(process.env.DBURL,{  useNewUrlParser: true,
    dbName: 'Quiz'}).then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err)); 

  // api

  app.use("/api", userRoute)
  app.use("/api", testRoute)
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });