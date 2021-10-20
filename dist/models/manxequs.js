"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manxequ = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
class Manxequ extends sequelize_1.Model {
}
exports.Manxequ = Manxequ;
Manxequ.init({}, {
    tableName: "manxequs",
    sequelize: db_1.database,
    timestamps: true
});
