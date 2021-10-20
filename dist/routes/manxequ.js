"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManxequtoRoute = void 0;
const manxequs_controlle_1 = require("../controllers/manxequs.controlle");
class ManxequtoRoute {
    constructor() {
        this.manxequController = new manxequs_controlle_1.ManxequController();
    }
    routes(app) {
    }
}
exports.ManxequtoRoute = ManxequtoRoute;
