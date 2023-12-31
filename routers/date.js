const express = require('express');

const routerDate = express.Router();
routerDate.use(express.json());

//Servicio general de GET, POST con select total
const ServicieGet = require('../services/ServiciesGet.js');
const ServicesPost = require("../services/ServiciesPost.js");
const ServiciesPut = require("../services/ServiciesPut.js");
const ServiciesDelete = require("../services/ServiciesDelete.js");

// servicios especificos para cada ruta
const Date = ServicieGet('datos');
const PostDate = ServicesPost('datos');
const PutDate = ServiciesPut('datos');
const DeleteDate = ServiciesDelete('datos');

// utilizar metodos

routerDate.get('/', async (req,res) => {
    try {
        const getServicies = await Date();
        const element = await getServicies();
        res.json(element);

    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor GET' });
    }
});

routerDate.post ('/', async (req,res)=>{
    const Nuevoarticulo = req.body;
    try { 
        const PostServicies = await PostDate();
        const element = await PostServicies(Nuevoarticulo);
        res.json(element);

    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor POST' });
    }
  });


routerDate.put ('/', async (req, res) => {
    //const id = req.params.id;
    const Nuevoarticulo = req.body;
    
    try {
        const PutServicie = await PutDate();
        const element = await PutServicie(Nuevoarticulo);
        res.json(element)

    }catch (error) {
        res.status(500).json({error: 'error interno del servidor PUT'})
    }
  })

routerDate.delete('/:id', async (req,res) => {
    const id = req.params.id;

    try {
        const DeleteService = await DeleteDate();
        const result = await DeleteService(id);
        res.json(result);

    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
})

module.exports = routerDate;