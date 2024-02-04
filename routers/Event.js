const express = require('express');
const verificarToken = require('../database/auth.js');


const routerEvent = express.Router();
routerEvent.use(express.json());

//Servicio general de GET, POST con select total
const ServicieGet = require('../services/ServiciesGet.js');
const ServicesPost = require("../services/ServiciesPost.js");
const ServiciesPut = require("../services/ServiciesPut.js");
const ServiciesDelete = require("../services/ServiciesDelete.js");

// servicios especificos para cada ruta
const Event = ServicieGet('eventos');
const PostEvent = ServicesPost('eventos');
const PutEvent = ServiciesPut('eventos');
const DeleteEvent = ServiciesDelete('eventos');

// utilizar metodos

routerEvent.get('/', async (req,res) => {
    try {
        const getServicies = await Event();
        const element = await getServicies();
        res.json(element);

    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor GET' });
    }
});

routerEvent.post ('/', verificarToken, async (req,res)=>{
    const Nuevoarticulo = req.body;
    try { 
        const PostServicies = await PostEvent();
        const element = await PostServicies(Nuevoarticulo);
        res.json(element);

    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor POST' });
    }
  });


routerEvent.put ('/', verificarToken, async (req, res) => {
    const Nuevoarticulo = req.body;
    
    try {
        const PutServicie = await PutEvent();
        const element = await PutServicie(Nuevoarticulo);
        res.json(element)

    }catch (error) {
        res.status(500).json({error: 'error interno del servidor PUT'})
    }
  })

routerEvent.delete('/:id', verificarToken, async (req,res) => {
    const id = req.params.id;

    try {
        const DeleteService = await DeleteEvent();
        const result = await DeleteService(id);
        res.json(result);

    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor DELETE'});
    }
})

module.exports = routerEvent;