const { Sequelize } = require('sequelize');
const database = require("../config/db.js")

const cidade = database.define("cidade_tb", {
    cidade_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome : {
        type: Sequelize.STRING(255),
        allowNull: false
    }
})

module.exports = cidade