import express from "express";
import cors from "cors";
import router from "./route/routes";
import connectDb from "./db/db";
const port = 2000;
const app = express();
//medewares
app.use(cors());
app.listen(port, (): void => {
  connectDb("mongodb+srv://promise:4128@cluster0.x9stvxh.mongodb.net/");
  console.log("app is listenig on port 2000");
});
