"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("../utils/multer"));
const uploadController_1 = __importDefault(require("../controller/uploadController"));
const router = express_1.default.Router();
router.route("/upload").post(multer_1.default.single("filepath"), uploadController_1.default);
exports.default = router;
