const { Connect } = require('../database/connectData.js');


const ServiciesPost = (tableName) => {
    return async () => {
        const connection = await Connect();

        const PostServicies = async (...items) => {
            const objetoEntrada = items[0];
            const propiedades = Object.keys(objetoEntrada)
            const objetoInsertar = {}
            propiedades.forEach(propiedad => {
                objetoInsertar[propiedad] = objetoEntrada[propiedad];
            });

            try {
                await connection(tableName).insert(objetoInsertar);
                return { success: true, message: 'Artículo creado exitosamente' };

            } catch (error) {
                console.error('Error al crear artículo:', error);
                return { success: false, message: 'Error al crear artículo' };
            }
        };
        return PostServicies
    }
}

module.exports = ServiciesPost