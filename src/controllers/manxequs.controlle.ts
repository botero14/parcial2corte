import {Request,Response} from 'express'
import {Sequelize}  from 'sequelize'
import {Manxequ,ManxequI} from '../models/manxequs'

export class ManxequController{
    public async getManxequ(res: Response, req: Request){
        try{
            const manxequs = await Manxequ.findAll();
            if (!manxequs){
                res.status(400).json({msg:'user invalid'})
            }
            return res.status(200).json({manxequs});
        }catch(error){
            res.status(400).json({msg:'Error internal'})
        }
    }
}