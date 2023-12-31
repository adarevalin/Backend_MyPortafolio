const { Connect } = require('../database/connectData.js');

const ServicieGet = (tableName) => {
    return async () => {
        const connection = await Connect();
        const getServicies = async () => {
            try {
                // Realiza la operación de selección en la tabla
                const result = await connection(tableName).select();
                return result;
            } catch (error) {
                console.error('Error al obtener elementos:', error.message);
                throw error;
            }
        }
        return getServicies;

    }
    
}

module.exports = ServicieGet;
