"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MantenimientoRoute = void 0;
const mantenimientos_controller_1 = require("../controllers/mantenimientos.controller");
class MantenimientoRoute {
    constructor() {
        this.mantenimientoController = new mantenimientos_controller_1.MantenimientoController();
    }
    routes(app) {
    }
}
exports.MantenimientoRoute = MantenimientoRoute;
