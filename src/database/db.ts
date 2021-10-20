//import Sequelize from 'sequelize';
const Sequelize = require('sequelize')

const DB_NAME = 'botero_parcial';
const DB_USER = 'root';
const DB_PASS = 'Pan123456';

export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,
    {
        host:'localhost',
        dialect:'mysql',
        port:'3306'
    }
);

database.sync({force: true})
    .then(function(){
        console.log('La base de datos ha sisdo creadad con exito. ')
    });