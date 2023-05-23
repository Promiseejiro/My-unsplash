import express from "express";
import upload from "../utils/multer";
import * as photoController  from "../controller/photo_controller";

const router = express.Router();

router.route("/photo").post(upload.single("file"), photoController.addPhoto);

router.route("/photos").get(photoController.getAllPhoto);

router.route("/search-photo").get(photoController.searchPhoto)

router.route("/:id").delete(photoController.deletePhoto)

export default router;