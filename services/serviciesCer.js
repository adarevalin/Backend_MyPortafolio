const { Connect } = require('../database/connectData.js');

const Certificados = async () => {
    // Espera la conexión antes de acceder a la base de datos
    const connection = await Connect();

    const tableName = 'Certificados';

    const getCertificados = async () => {
        try {
            // Realiza la operación de selección en la tabla
            const result = await connection(tableName).select();
            return result;
        } catch (error) {
            console.error('Error al obtener elementos:', error.message);
            throw error;
        }
    }

    return getCertificados;
}

module.exports = { Certificados };
