const personagem = require('../models/personagem.js')

module.exports = {

    async create(req, res)
    {
        const data = req.body;

        const count = await personagem.count({where: {nome : data.nome}})
        if (count > 0){
            res.status(400).json({message: "Um personagem com esse nome já existe."})
        }
            
        else {
            await personagem.create({
                nome : data.nome,
                descricao : data.descricao
            })

            res.status(200).json({ message: "Um novo personagem foi criado!" });
        }

    },

    async getAll(req, res)
    {
        try {
            const personagens = await personagem.findAll();

            if (personagens.length === 0){
                res.status(400).json({ message: "Nenhum personagem foi criado." });
            } else {
                res.status(200).json({ "Personagens": personagens });
            }
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar por personagens." });
        }
    },

    async getById(req, res)
    {
        try {
            const { id } = req.params;

            const personagens = await personagem.findByPk(id);

            if (!personagens){
                res.status(400).json({ message: "Esse personagem ainda não foi criado." });
            }
            else {
                res.status(200).json(personagens);
            }
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar por personagem." });
        }
    }
}