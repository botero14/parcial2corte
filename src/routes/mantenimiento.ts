import {Request,Response,Application} from 'express'
import {MantenimientoController} from '../controllers/mantenimientos.controller'

export class MantenimientoRoute{
    public mantenimientoController: MantenimientoController  = new MantenimientoController();
    public routes(app: Application){
        //app.route('/mantenimiento').get(this.mantenimientoController.getMantenimiento)
    }
}