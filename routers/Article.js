const express = require('express');

const routerArticulos = express.Router();
routerArticulos.use(express.json());

//Servicio general de GET, POST con select total
const ServicieGet = require('../services/ServiciesGet.js');
const ServicesPost = require("../services/ServiciesPost.js");
const ServiciesPut = require("../services/ServiciesPut.js");
const ServiciesDelete = require("../services/ServiciesDelete.js");

// servicios especificos para cada ruta
const Articulos = ServicieGet('Articulos');
const PostArticulos = ServicesPost('Articulos');
const PutArticulos = ServiciesPut('Articulos');
const DeleteArticulo = ServiciesDelete('Articulos');

// utilizar metodos

routerArticulos.get('/', async (req,res) => {
    try {
        const getServicies = await Articulos();
        const element = await getServicies();
        res.json(element);

    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor GET' });
    }
});

routerArticulos.post ('/', async (req,res)=>{
    const Nuevoarticulo = req.body;
    try { 
        const PostServicies = await PostArticulos();
        const element = await PostServicies(Nuevoarticulo);
        res.json(element);

    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor POST' });
    }
  });


routerArticulos.put ('/', async (req, res) => {
    //const id = req.params.id;
    const Nuevoarticulo = req.body;
    
    try {
        const PutServicie = await PutArticulos();
        const element = await PutServicie(Nuevoarticulo);
        res.json(element)

    }catch (error) {
        res.status(500).json({error: 'error interno del servidor PUT'})
    }
  })

routerArticulos.delete('/:id', async (req,res) => {
    const id = req.params.id;

    try {
        const DeleteService = await DeleteArticulo();
        const result = await DeleteService(id);
        res.json(result);

    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
})

module.exports = routerArticulos;