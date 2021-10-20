import {Model,DataTypes} from 'sequelize'
const Sequelize = require('sequelize')
import {database} from '../database/db'

export class Manxequ extends Sequelize.Model{
   
    
}
export interface ManxequI{
  
 }


Manxequ.init(
    {
        
    },
    {
        tableName:"manxequs",
        sequelize:database,
        timestamps:true
    }
);