"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDb = (url) => {
    return mongoose_1.default
        .connect(url, {})
        .then(() => {
        console.log("database connected successfully");
    })
        .catch((error) => {
        console.log("erro during connection");
    });
};
exports.default = connectDb;
