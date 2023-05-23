"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    filepath: {
        type: String,
        default: "",
    },
    label: {
        type: String,
        default: ""
    }
}, { timestamps: true });
const photoSchema = (0, mongoose_1.model)("image-uploader", schema);
exports.default = photoSchema;
