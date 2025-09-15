const { combineTableNames } = require('sequelize/lib/utils');
const jogador = require('../models/jogador.js');
const personagem = require('../models/personagem.js');

module.exports = {

    async create(req, res)
    {
        const data = req.body;

        const count = await jogador.count({where: {nome : data.nome}})
        if (count > 0){
            res.status(400).json({message: "Um jogador com esse nome já existe."})
        }
            
        else {
            await jogador.create({
                nome : data.nome,
                link_da_imagem : data.link_da_imagem,
                vivo : data.vivo,
                cidade_id : data.cidade,
                personagem_id : data.personagem
            })

            res.status(200).json({ message: "Um novo jogador foi criado!" });
        }

    },

    async getAll(req, res)
    {
        try {
            const jogadores = await jogador.findAll();

            if (jogadores.length === 0){
                res.status(400).json({ message: "Nenhum jogador foi criado."});
            }
            else {
                res.status(200).json(jogadores);
            }
        } catch (error) {
            res.status(500).json("Erro ao buscar por personagens.");
        }
    },

    async getById(req, res)
    {
        try {
            const { id } = req.params;
            const jogadores = await jogador.findByPk(id);

            if (!jogadores) {
                res.status(400).json("Esse jogador ainda não foi criado.");
            }
            else {
                res.status(200).json(jogadores);
            }
        } catch (error) {
            res.status(500).json("Erro ao buscar por jogador.");
        }
    },

    async getAllByCharacter(req, res)
    {
        try {
            const jogadores = await jogador.findAll({
                attributes: ['nome'],
                include:[{
                    model: require('../models/personagem.js'),
                    as: 'personagem',
                    attributes: ['nome']
                }]
            });

            if (jogadores.length === 0){
                res.status(400).json("Nenhum jogador foi criado.");
            }
            else {
                res.status(200).json(jogadores);
            }
        } catch (error) {
            res.status(500).json("Erro ao buscar por jogadores");
        }
    }
}