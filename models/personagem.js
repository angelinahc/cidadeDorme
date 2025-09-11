const { Sequelize } = require('sequelize')
const database = require("../config/db.js")

const personagem = database.define("personagem_tb",
    {
        personagem_id : {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome : {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        descricao : {
            type: Sequelize.STRING(255),
            allowNull: false
        }
    }
)

module.exports = personagem