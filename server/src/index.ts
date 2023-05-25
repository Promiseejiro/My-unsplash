import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./route/routes";
import connectDb from "./db/db";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env["MONGU_URL"]);
const port = process.env["PORT"] || 8000;
const app = express();
//medewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
//routes
app.use("/", router);
app.listen(port, async () => {
  await connectDb(process.env["MONGU_URL"]);
  console.log("app is listenig on port 2000");
});