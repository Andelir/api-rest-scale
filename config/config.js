const fs = require('fs');
require('dotenv').config();

module.exports = {
    development: {
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        host: '127.0.0.1',
        port: 5432,
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    test: {
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        host: '127.0.0.1',
        port: 5432,
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    production: {
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        host: '127.0.0.1',
        port: 5432,
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true,
        }
    }
};