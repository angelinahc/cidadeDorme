const { Sequelize } = require('sequelize')
const database = require("../config/db.js")
const cidade = require("./cidade.js")
const personagem = require("./personagem.js")

const jogador = database.define("jogador_tb",
    {
        jogador_id : {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome : {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        link_da_imagem : {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        vivo : {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    }
)

jogador.belongsTo(cidade, { 
  as: "cidade", 
  foreignKey: "cidade_id", 
  onDelete: "NO ACTION", 
  onUpdate: "NO ACTION"
})

jogador.belongsTo(personagem, { 
  as: "personagem", 
  foreignKey: "personagem_id", 
  onDelete: "NO ACTION", 
  onUpdate: "NO ACTION"
})


module.exports = jogador