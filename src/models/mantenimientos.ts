import {Model,DataTypes} from 'sequelize'
const Sequelize = require('sequelize')

import {database} from '../database/db'
import {Manxequ} from './manxequs'

export class Mantenimiento extends Sequelize.Model{
    public fecha !: string;
    public descripcion !: string;
    public resultado !: boolean;
}
export interface MantenimientoI{
     fecha : string;
     descripcion : string;
     resultado : boolean;
 }


Mantenimiento.init(
    {
        fecha:{
            type:Sequelize.DataTypes.DATE,
            allowNull:false
        },
        descripacion:{
            type:Sequelize.DataTypes.DATE,
            allowNull:false
        },
        resultado:{
            type:Sequelize.DataTypes.DATE,
            allowNull:false
        }

    },
    {
        tableName:"mantenimiento",
        sequelize:database,
        timesstamps:true
    }
);

Mantenimiento.hasMany(Manxequ);
Manxequ.belongsTo(Mantenimiento);