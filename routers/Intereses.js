const express = require('express')
const verificarToken = require('../database/auth.js');

// creacion de la ruta
const routerIntereses = express.Router();
routerIntereses.use(express.json())

// servicio general de POST con insert total
const ServicieGet = require('../services/ServiciesGet.js')
const ServiciePost = require('../services/ServiciesPost.js')
const ServiciesPut = require('../services/ServiciesPut.js')
const ServiciesDelete = require('../services/ServiciesDelete.js')

// servicios especificos para cada ruta
const Intereses = ServicieGet('interes')
const PostIntereses = ServiciePost('interes')
const PutIntereses = ServiciesPut('interes')
const DeleteIntereses = ServiciesDelete('interes')


// utilizar el metodo get

routerIntereses.get('/', async (req, res) => {
    try {
        const getServicies = await Intereses();
        const element = await getServicies();
        res.json(element)
    }catch (error) {
        res.status(500).json({ error: 'Error interno del servidor GET' });
    }
})


routerIntereses.post('/', verificarToken, async(req, res) => {
    const Nuevoarticulo = req.body;
    try {
        const PostServicies = await PostIntereses();
        const element = await PostServicies(Nuevoarticulo);
        res.json(element);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor POST' });
    }
})

routerIntereses.put('/', verificarToken, async(req,res) =>{
    const Nuevoarticulo = req.body;

    try {
        const PutServicie = await PutIntereses();
        const element = await PutServicie(Nuevoarticulo);
        res.json(element);
    } catch (error) {
        res.status(500).json({error: "Error interno del servidor PUT"})
    }
})

routerIntereses.delete('/:id', verificarToken, async (req,res) => {
    const id = req.params.id;
    try {
        const DeleteService = await DeleteIntereses()
        const element = await DeleteService(id)
        res.json(element)
    }catch (error) {
        res.status(500).json({error: "error interno del servidor DELETE"})
    }
})

module.exports = routerIntereses;