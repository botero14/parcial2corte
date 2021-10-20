"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const mantenimiento_1 = require("./mantenimiento");
const equipo_1 = require("./equipo");
const manxequ_1 = require("./manxequ");
class Routes {
    constructor() {
        this.mantenimientoRoute = new mantenimiento_1.MantenimientoRoute();
        this.equipoRoute = new equipo_1.EquipoRoute();
        this.manxequRoute = new manxequ_1.ManxequtoRoute();
    }
}
exports.Routes = Routes;
