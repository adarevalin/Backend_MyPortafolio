const knex = require('knex');

const databaseService = () => {
    return knex({
        client: 'pg',
        connection: {
            host: 'localhost',
            port: 8080, // Puerto predeterminado de PostgreSQL
            user: 'postgres',
            database: 'postgres',
            password: 'tu_contraseña', // Ajusta la contraseña según sea necesario
        }
    });
}

module.exports = {databaseService};
