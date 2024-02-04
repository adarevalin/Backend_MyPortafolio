const knex = require('knex');
require('dotenv').config();

const puerto = process.env.DB_PORT || 5432;
const hostDB = process.env.DB_HOST;
const usuarioDB = process.env.DB_USER;
const DB = process.env.DB;
const DB_PASSWORD = process.env.DB_PASSWORD
//const contraseñaDB = process.env.DB_PASSWORD;

const databaseService = () => {
    return knex({
        client: 'pg',
        connection: {
            host: hostDB,
            port: puerto, // Puerto predeterminado de PostgreSQL
            user: usuarioDB,
            database: DB,
            password: DB_PASSWORD, // Ajusta la contraseña según sea necesario
            ssl: { rejectUnauthorized: false },
        }
    });
}

module.exports = {databaseService};
