const cidade = require('../models/cidade.js')

module.exports = {

    async create(req, res)
    {
        const data = req.body;
        
        const count = await cidade.count({where: {nome : data.nome}})

        if (count > 0){
            res.status(400).json({message: "Uma cidade com esse nome já existe."})
        }

        else {
            await cidade.create({
                nome : data.nome,
            })

            res.status(200).json({ message: "Uma nova cidade foi criada!" });
        }
    },

    async getAll(req, res)
    {
        try {
            const cidades = await cidade.findAll()

            if (cidades.length === 0){
                res.status(400).json({ message: "Nenhuma cidade foi criada." })
            }

            else {
                res.status(200).json({ "Cidades" : cidades});
            }
        } catch (error) {
            res.status(500).json({ message : "Erro ao buscar cidades."});
        }
    },

    async getById(req, res)
    {
        try {
            const { id } = req.params;

            const cidades = await cidades.findByPk(id);

            if (!cidades){
                res.status(400).json({ message: "Essa cidade ainda não foi criada." })
            }
            else {
                res.status(200).json(cidades);
            }
        } catch (error) {
            res.status(500).json({ message : "Erro ao buscar por cidade."});
        }
    }
}