import {Mantenimiento} from "../models/mantenimientos"
import {Equipos} from "../models/equipos"
import {Manxequ} from "../models/manxequs"

import {MantenimientoRoute} from "./mantenimiento"
import {EquipoRoute} from "./equipo"
import {ManxequtoRoute} from "./manxequ"

export class Routes{
    public mantenimientoRoute : MantenimientoRoute = new MantenimientoRoute();
    public equipoRoute : EquipoRoute = new EquipoRoute();
    public manxequRoute : ManxequtoRoute = new ManxequtoRoute();
}