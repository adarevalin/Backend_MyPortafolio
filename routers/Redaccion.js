const express = require('express')
const verificarToken = require('../database/auth.js');

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
        res.status(500).json({error: 'Error interno del servidor GET'})
    }
})

routerRedaccion.post('/', verificarToken, async (req, res) => {
    const Nuevoarticulo = req.body;
    try {
        const PostServicies = await RedaccionPost();
        const element = await PostServicies(Nuevoarticulo);
        res.json(element);
    } catch (error) {
        res.status(500).json({error: 'Error interno del servidor POST'})
    }
})

routerRedaccion.put('/', verificarToken, async(req,res) => {
    const Nuevoarticulo = req.body;

    try {
        const PutServicie = await RedaccionPut();
        const element = await PutServicie(Nuevoarticulo);
        res.json(element);
    } catch (error) {
        res.status(500).json({error: "Error interno del servidor PUT"})
    }
})

routerRedaccion.delete('/:id', verificarToken, async(req,res) => {
    const id = req.params.id;
    try {
         const DeleteService = await DeleteRedaccion()
         const element = await DeleteService(id);
         res.json(element)
    } catch (error) {
        res.status(500).json({error: "Error interno del servidor DELETE"})
    }
})

module.exports = routerRedaccion;