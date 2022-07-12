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
const express_1 = __importDefault(require("express"));
const userProfile = require('./dataBase/user');
const mongoose_1 = require("mongoose");
const app = (0, express_1.default)();
const Port = 2000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("te5dem");
});
//test mongo db
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, mongoose_1.connect)('mongodb://localhost:27017/betterB');
        const houssem = new userProfile({
            name: 'houssem',
            img: "test.jpg",
            email: 'houssem@gmail.com',
            weight: 100,
            height: 1.78,
        });
        yield houssem.save();
        console.log("te5dem");
    });
}
run().catch(err => console.log(err));
app.listen(Port, () => {
    console.log("server connected successfully on port " + Port);
});
