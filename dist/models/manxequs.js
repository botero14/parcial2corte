"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manxequ = void 0;
const Sequelize = require('sequelize');
const db_1 = require("../database/db");
class Manxequ extends Sequelize.Model {
}
exports.Manxequ = Manxequ;
Manxequ.init({}, {
    tableName: "manxequs",
    sequelize: db_1.database,
    timestamps: true
});
