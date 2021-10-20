import {Request,Response,Application} from 'express'
import {EquiopoController} from '../controllers/equipos.controller'

export class EquipoRoute{
    public equipoController: EquiopoController  = new EquiopoController();
    public routes(app: Application): void{
        app.route('/user').get(this.equipoController.getEquipo);
    }
}