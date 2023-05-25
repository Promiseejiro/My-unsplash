"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./route/routes"));
const db_1 = __importDefault(require("./db/db"));
const port = 2000;
const app = (0, express_1.default)();
//medewares
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//routes
app.use("/", routes_1.default);
app.listen(port, () => {
    (0, db_1.default)("mongodb+srv://my-unsplash:4128@cluster0.zr1pucn.mongodb.net/");
    console.log("app is listenig on port 2000");
});
