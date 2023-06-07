const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    process.env.PGDATABASE || 'scale',
    process.env.PGUSER,
    process.env.PGPASSWORD, {
    host: process.env.PGHOST || 'localhost',
    dialect: process.env.PGDIALECT || 'postgres'
});

module.exports = sequelize;