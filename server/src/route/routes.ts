import express from "express";
import upload from "../utils/multer";
import * as photoController  from "../controller/photo_controller";

const router = express.Router();

router.route("/select").post(upload.single("file"),photoController.selectPhoto);
router.route("/photo").post( photoController.addPhoto);

router.route("/photos").get(photoController.getAllPhoto);

router.route("/:id").delete(photoController.deletePhoto)

export default router;
