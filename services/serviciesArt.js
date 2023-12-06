const { Connect } = require('../database/connectData.js');

const Articulos = async () => {
    
    const connection = await Connect();

    const tableName = 'Articulos';

    const getArticulos = async () => {
        try {
            const result = await connection(tableName).select();
            return result;
        }
        catch (error) {
            console.error('Error al obtener elementos:', error.message);
            throw error;

        }
    }
    return getArticulos

}

module.exports = {Articulos}