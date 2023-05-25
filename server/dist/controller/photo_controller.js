"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePhoto = exports.getAllPhoto = exports.addPhoto = exports.selectPhoto = void 0;
const photo_model_1 = __importDefault(require("../modal/photo_model"));
const cloudinarySetup_1 = __importDefault(require("../utils/cloudinarySetup"));
const selectPhoto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if (req.file) {
            const cloudinaryResponse = yield cloudinarySetup_1.default.uploader.upload((_a = req.file) === null || _a === void 0 ? void 0 : _a.path, {
                folder: "my-unsplash",
                resource_type: "auto",
            });
            console.log(cloudinaryResponse);
            res.status(200).json({ filepath: cloudinaryResponse.secure_url });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.selectPhoto = selectPhoto;
const addPhoto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { label, filepath } = yield req.body;
        const newPhoto = new photo_model_1.default({
            label: label, filepath: filepath
        });
        newPhoto.save();
        res.send(newPhoto);
    }
    catch (error) {
        console.log(error);
    }
});
exports.addPhoto = addPhoto;
const getAllPhoto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query["search"]);
    const photos = yield photo_model_1.default.find({ label: { $regex: req.query["search"], $options: "i" }
    });
    if (photos) {
        res.send(photos);
    }
});
exports.getAllPhoto = getAllPhoto;
const deletePhoto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = yield req.params;
    console.log(id);
    try {
        const deletedPhoto = yield photo_model_1.default.deleteOne({ _id: id });
        if (deletedPhoto) {
            res.send(deletedPhoto);
        }
    }
    catch (erro) {
        res.send(erro);
    }
});
exports.deletePhoto = deletePhoto;
