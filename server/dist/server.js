"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const estate_routes_1 = require("./routes/estate.routes");
const city_routes_1 = require("./routes/city.routes");
const ward_routes_1 = require("./routes/ward.routes");
const type_routes_1 = require("./routes/type.routes");
const category_routes_1 = require("./routes/category.routes");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
dotenv_1.default.config();
const port = process.env.PORT || 3000;
const db = process.env.DB_URI;
const secret = process.env.JWT_SECRET;
app.use(express_1.default.json());
mongoose_1.default.connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));
app.use('/users', user_routes_1.default);
app.use('/estates', estate_routes_1.estateRoutes);
app.use('/cities', city_routes_1.cityRoute);
app.use('/wards', ward_routes_1.wardRoute);
app.use('/types', type_routes_1.typeRoute);
app.use('/categories', category_routes_1.categoryRoute);
app.use("/uploads", express_1.default.static(path_1.default.join(__dirname, "../uploads")));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
