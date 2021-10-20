//import {Model,DataTypes} from 'sequelize'
const Sequelize = require('sequelize')
import {database} from '../database/db'
import {Manxequ} from './manxequs'

export class Equipos extends Sequelize.Model{
    public marca !: string;
    public modelo !: string;
    
}
export interface EquiposI{
     marca : string;
     modelo : string;
     
 }


Equipos.init(
    {
        marca:{
            type:Sequelize.DataTypes.STRING,
            allowNull:false
        },
        modelo:{
            type:Sequelize.DataTypes.STRING,
            allowNull:false
        }

    },
    {
        tableName:"equipos",
        sequelize:database,
        timestamps:true
    }
);
Equipos.hasMany(Manxequ);
Manxequ.belongsTo(Equipos);