import { Request } from "express";
import multer from "multer";
import path from "path";
import { v4 as uuid } from "uuid";



const storage = multer.diskStorage({});
// alternative 
// const storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     cb(null, uuid() + path.extname(file.originalname));
//   },
// });

const upload = multer({ storage: storage });

export default upload;
