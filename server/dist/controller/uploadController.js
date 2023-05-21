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
const modal_1 = __importDefault(require("../modal/modal"));
const cloudinarySetup_1 = __importDefault(require("../utils/cloudinarySetup"));
const uploadRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if (req.file) {
            const result = yield cloudinarySetup_1.default.uploader.upload((_a = req.file) === null || _a === void 0 ? void 0 : _a.path, {
                folder: "image-uploader",
                resource_type: "auto",
            });
            const body = {
                id: req.body.id,
                filepath: result.secure_url,
            };
            const fileDetails = new modal_1.default(body);
            yield fileDetails.save();
            console.log(fileDetails);
            res.status(200).send(fileDetails);
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.default = uploadRoute;
