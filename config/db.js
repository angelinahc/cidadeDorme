const { Sequelize } = require('sequelize');

const database = new Sequelize('cidadeDorme', 'Aula', '123', {
  dialect: 'mssql',
  host: 'localhost',
  port: 1433, 
  dialectOptions: {
    options: {
      encrypt: false,               
      trustServerCertificate: true,
    }
  }
});

module.exports = database;