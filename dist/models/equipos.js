"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipos = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
class Equipos extends sequelize_1.Model {
}
exports.Equipos = Equipos;
Equipos.init({
    marca: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    modelo: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: "equipos",
    sequelize: db_1.database,
    timestamps: true
});
