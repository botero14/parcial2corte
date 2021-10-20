import {Request,Response,Application} from 'express'
import {MantenimientoController} from '../controllers/mantenimientos.controller'

export class MantenimientoRoute{
    public mantenimientoController: MantenimientoController  = new MantenimientoController();
    public routes(app: Application):void{
        app.route('/user').get(this.mantenimientoController.getMantenimiento);
    }
}