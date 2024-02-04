const { databaseService } = require('./dataBase.js');
const baseDatos = databaseService();

const Connect = () => {
    return new Promise((resolve, reject) => {
        baseDatos
            .raw('SELECT 1')
            .then(() => {
                resolve(baseDatos);
            })
            .catch((error) => {
                console.error('Error al conectar a la base de datos:', error.message);
                reject(error);
            });
    });
};

module.exports = { Connect };

