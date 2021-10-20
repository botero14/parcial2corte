import {Request,Response,Application} from 'express'
import {EquiopoController} from '../controllers/equipos.controller'

export class EquipoRoute{
    public equipoController: EquiopoController  = new EquiopoController();
    public routes(app: Application){
        //app.route('/mantenimiento').get(this.mantenimientoController.getMantenimiento)
    }
}