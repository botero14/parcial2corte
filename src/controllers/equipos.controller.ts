import {Request,Response} from 'express'
import {Sequelize}  from 'sequelize'
import {Equipos,EquiposI} from '../models/equipos'

export class EquiopoController{
    public async getEquipo(res: Response, req: Request){
        try{
            const equipos = await Equipos.findAll();
            if (!equipos){
                res.status(400).json({msg:'user invalid'})
            }
            return res.status(200).json({equipos});
        }catch(error){
            res.status(400).json({msg:'Error internal'})
        }
    }
}