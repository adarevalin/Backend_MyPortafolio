const { Connect } =require ('../database/connectData.js')

ServiciesPut = (tableName) => {
    return async () => {
        const connection = await Connect();

        const PutServicie = async (...items) =>{
            const objetoEntrada = items[0];
            const propiedades = Object.keys(objetoEntrada)
            const objetoInsertar = {}
            propiedades.forEach(propiedad => {
                objetoInsertar[propiedad] = objetoEntrada[propiedad];
            });

            try {
                await connection(tableName).where({id:objetoInsertar.id}).update(objetoInsertar);
                return { success: true, message: 'Elemento actualizado exitosamente' };
            } catch (error) {
                console.error('Error al actualizar elemento:', error);
                return { success: false, message: 'Error al actualizar elemento' };
            }
        }
    return PutServicie;

    }
}

module.exports = ServiciesPut
