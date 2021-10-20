"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mantenimiento = void 0;
const Sequelize = require('sequelize');
const db_1 = require("../database/db");
const manxequs_1 = require("./manxequs");
class Mantenimiento extends Sequelize.Model {
}
exports.Mantenimiento = Mantenimiento;
Mantenimiento.init({
    fecha: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
    descripacion: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
    resultado: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: "mantenimientos",
    sequelize: db_1.database,
    timestamps: true
});
Mantenimiento.hasMany(manxequs_1.Manxequ);
manxequs_1.Manxequ.belongsTo(Mantenimiento);
