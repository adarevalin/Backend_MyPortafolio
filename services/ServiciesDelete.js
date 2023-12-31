const { Connect } = require('../database/connectData.js');


ServiciesDelete = (tableName) => {
    return async () => {
            const connection = await Connect();

            const DeleteService = async (id) => {
            try {
                await connection(tableName).where({id}).del();
                return { success: true, message: 'Elemento eliminado exitosamente' };
            } catch (error) {
                console.error('Error al eliminar elemento:', error);
                return { success: false, message: 'Error al eliminar elemento' };
            }
        }
    return DeleteService
    }
}

module.exports = ServiciesDelete;