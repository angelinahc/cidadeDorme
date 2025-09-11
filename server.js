const express = require("express");
const app  = express();
const database = require("./config/db.js")
const routes = require("./routes.js")

const cors = require('cors');
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use(routes)

const port = 8080

require("./models/cidade.js");
require("./models/jogador.js");
require("./models/personagem.js");

database.sync({alter : true});
const server = app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));

module.exports = server;