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
exports.deletePhoto = exports.searchPhoto = exports.getAllPhoto = exports.addPhoto = void 0;
const photo_model_1 = __importDefault(require("../modal/photo_model"));
const cloudinarySetup_1 = __importDefault(require("../utils/cloudinarySetup"));
const addPhoto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id, label, filepath } = yield req.body;
    const cloudinaryResponse = yield cloudinarySetup_1.default.uploader.upload((_a = req.file) === null || _a === void 0 ? void 0 : _a.path, {
        folder: "my-unsplash",
        resource_type: "auto",
    });
    console.log(cloudinaryResponse);
    const newPhoto = new photo_model_1.default({
        label: label,
        filepath: cloudinaryResponse.secure_url
    });
    if (newPhoto) {
        newPhoto.save();
        res.status(200).send(newPhoto);
    }
});
exports.addPhoto = addPhoto;
const getAllPhoto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allPhoto = yield photo_model_1.default.find();
    if (allPhoto) {
        res.send(allPhoto);
    }
    if (!allPhoto) {
        res.status(200).send("No photo present");
    }
});
exports.getAllPhoto = getAllPhoto;
const searchPhoto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { label } = yield req.body;
    const query = photo_model_1.default.find({ label: label });
    res.send(query);
});
exports.searchPhoto = searchPhoto;
const deletePhoto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const deletedPhoto = yield photo_model_1.default.deleteOne({ _id: id });
    if (deletedPhoto) {
        res.send(deletedPhoto);
    }
});
exports.deletePhoto = deletePhoto;
