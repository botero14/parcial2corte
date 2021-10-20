import {Request,Response,Application} from 'express'
import {ManxequController} from '../controllers/manxequs.controlle'

export class ManxequtoRoute{
    public manxequController: ManxequController  = new ManxequController();
    public routes(app: Application):void{
        app.route('/user').get(this.manxequController.getManxequ);
    }
}