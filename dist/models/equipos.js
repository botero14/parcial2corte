"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipos = void 0;
const Sequelize = require('sequelize');
const db_1 = require("../database/db");
const manxequs_1 = require("./manxequs");
class Equipos extends Sequelize.Model {
}
exports.Equipos = Equipos;
Equipos.init({
    marca: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    modelo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "equipos",
    sequelize: db_1.database,
    timestamps: true
});
Equipos.hasMany(manxequs_1.Manxequ);
manxequs_1.Manxequ.belongsTo(Equipos);
