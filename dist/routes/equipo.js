"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipoRoute = void 0;
const equipos_controller_1 = require("../controllers/equipos.controller");
class EquipoRoute {
    constructor() {
        this.equipoController = new equipos_controller_1.EquiopoController();
    }
    routes(app) {
    }
}
exports.EquipoRoute = EquipoRoute;
