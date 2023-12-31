const express = require('express')

// creacion de rutas
const routerRedaccion = express.Router();
routerRedaccion.use(express.json());

//Servicio general de GET con select total
const ServicieGet = require('../services/ServiciesGet.js')
const ServicesPost = require('../services/ServiciesPost.js')
const ServiciesPut = require('../services/ServiciesPut.js')
const ServiciesDelete = require('../services/ServiciesDelete.js')

// importar servicios
const Redaccion = ServicieGet('redaccion')
const RedaccionPost = ServicesPost('redaccion')
const RedaccionPut = ServiciesPut('redaccion')
const  DeleteRedaccion = ServiciesDelete('redaccion')

// utilizar los metodos

routerRedaccion.get('/', async (req, res) => {
    try{ 
        const getServicies = await Redaccion();
        const element = await getServicies();
        res.json(element)
    } catch (error) {
        res.status(500).json({error: 'Esto es un error del sistema'})
    }
})

routerRedaccion.post('/', async (req, res) => {
    const Nuevoarticulo = req.body;
    try {
        const PostServicies = await RedaccionPost();
        const element = await PostServicies(Nuevoarticulo);
        res.json(element);
    } catch (error) {
        res.status(500).json({error: 'Error en el post de la redacción'})
    }
})

routerRedaccion.put('/', async(req,res) => {
    const Nuevoarticulo = req.body;

    try {
        const PutServicie = await RedaccionPut();
        const element = await PutServicie(Nuevoarticulo);
        res.json(element);
    } catch (error) {
        res.status(500).json({error: "Error en la update certificate"})
    }
})

routerRedaccion.delete('/:id', async(req,res) => {
    const id = req.params.id;
    try {
         const DeleteService = await DeleteRedaccion()
         const element = await DeleteService(id);
         res.json(element)
    } catch (error) {
        res.status(500).json({error: "error en el delete de redaccion"})
    }
})

module.exports = routerRedaccion;