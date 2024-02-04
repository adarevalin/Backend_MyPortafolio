const express = require('express')
const verificarToken = require('../database/auth.js');

// creacion de la ruta
const routerStudios = express.Router();
routerStudios.use(express.json())

// servicio general de POST con insert total
const ServicieGet = require('../services/ServiciesGet.js')
const ServiciePost = require('../services/ServiciesPost.js')
const ServiciesPut = require('../services/ServiciesPut.js')
const ServiciesDelete = require('../services/ServiciesDelete.js')

// servicios especificos para cada ruta
const Studios = ServicieGet('studios')
const PostStudios = ServiciePost('studios')
const PutStudios = ServiciesPut('studios')
const DeleteStudios = ServiciesDelete('studios')


// utilizar el metodo get

routerStudios.get('/', async (req, res) => {
    try {
        const getServicies = await Studios();
        const element = await getServicies();
        res.json(element)
    }catch (error) {
        res.status(500).json({ error: 'Error interno del servidor GET'});
    }
})


routerStudios.post('/', verificarToken, async(req, res) => {
    const Nuevoarticulo = req.body;
    try {
        const PostServicies = await PostStudios();
        const element = await PostServicies(Nuevoarticulo);
        res.json(element);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor POST'});
    }
})

routerStudios.put('/', verificarToken, async(req,res) =>{
    const Nuevoarticulo = req.body;

    try {
        const PutServicie = await PutStudios();
        const element = await PutServicie(Nuevoarticulo);
        res.json(element);
    } catch (error) {
        res.status(500).json({error: "Error interno del servidor PUT"})
    }
})

routerStudios.delete('/:id', verificarToken, async (req,res) => {
    const id = req.params.id;
    try {
        const DeleteService = await DeleteStudios()
        const element = await DeleteService(id)
        res.json(element)
    }catch (error) {
        res.status(500).json({error: "Error interno del servidor DELETE"})
    }
})

module.exports = routerStudios;