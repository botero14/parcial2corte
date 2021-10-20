import {Request,Response} from 'express'
import {Sequelize}  from 'sequelize'
import {Mantenimiento,MantenimientoI} from '../models/mantenimientos'

export class MantenimientoController{
    public async getMantenimiento(res: Response, req: Request){
        try{
            const mantenimientos = await Mantenimiento.findAll();
            if (!mantenimientos){
                res.status(400).json({msg:'user invalid'})
            }
            return res.status(200).json({mantenimientos});
        }catch(error){
            res.status(400).json({msg:'Error internal'})
        }
    }
}