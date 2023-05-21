import express from "express";
import upload from "../utils/multer";
import uploadRoute from "../controller/uploadController";
const router = express.Router();

router.route("/upload").post(upload.single("filepath"), uploadRoute);

export default router;
