const express = require('express')
const routes = express.Router()
const personagem = require('./controllers/personagem.js')
const cidade = require('./controllers/cidade.js')
const jogador = require('./controllers/jogador.js')

routes.post('/criaJogador', jogador.create)
routes.get('/listaJogador', jogador.getAll)
routes.get('/jogador/{:id}', jogador.getById)
routes.get('/jogadores', jogador.getAllByCharacter)

routes.post('/criaCidade', cidade.create)
routes.get('/listaCidade', cidade.getAll)
routes.get('/cidade/{:id}', cidade.getById)

routes.post('/criaPersonagem', personagem.create)
routes.get('/listaPersonagem', personagem.getAll)
routes.get('/personagem/{:id}', personagem.getById)

module.exports = routes