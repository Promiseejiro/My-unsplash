import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import router from "./route/routes";
import connectDb from "./db/db";
const port = 2000;
const app = express();

//medewares
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
//routes
app.use("/",router)
app.listen(port, (): void => {
  connectDb("mongodb+srv://my-unsplash:4128@cluster0.zr1pucn.mongodb.net/");
  console.log("app is listenig on port 2000");
});
