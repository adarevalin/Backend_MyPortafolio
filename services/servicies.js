const { Connect } = require('../database/connectData.js');

const serArticulo = async () => {

    const connection = await Connect();

    const tableName = 'Certificados';

    const getArticulos = async() => {
        const result = await connection(tableName).select();
        return result;
    };

    
    //aqui paso los valores a mi base de datos, deben tener el mismo nombre
    const crearArticulo = async ({codigo, nombre}) => {
        try {
            await baseDatos(tableName).insert({
                codigo: codigo,
                nombre: nombre
            });
            return { success: true, message: 'Artículo creado exitosamente' };
        } catch (error) {
            console.error('Error al crear artículo:', error);
            return { success: false, message: 'Error al crear artículo' };
        }
    };

    return {crearArticulo,getArticulos}
 
}

 module.exports = {serArticulo};