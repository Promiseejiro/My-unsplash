"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    id: {
        type: String,
        default: "",
    },
    filepath: {
        type: String,
        default: "",
    },
}, { timestamps: true });
const uploadSchema = (0, mongoose_1.model)("image-uploader", schema);
exports.default = uploadSchema;
