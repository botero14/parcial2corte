"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mantenimiento = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
class Mantenimiento extends sequelize_1.Model {
}
exports.Mantenimiento = Mantenimiento;
Mantenimiento.init({
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    descripacion: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    resultado: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: "mantenimientos",
    sequelize: db_1.database,
    timestamps: true
});
