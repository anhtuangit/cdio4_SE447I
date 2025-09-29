"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT || 3000;
const db = process.env.DB_URI;
const serect = process.env.JWT_SECRECT;
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/testdb')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));
app.use('/users', user_routes_1.default);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
