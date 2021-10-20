import {Request,Response,Application} from 'express'
import {ManxequController} from '../controllers/manxequs.controlle'

export class ManxequtoRoute{
    public manxequController: ManxequController  = new ManxequController();
    public routes(app: Application){
        //app.route('/mantenimiento').get(this.mantenimientoController.getMantenimiento)
    }
}