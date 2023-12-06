const express = require('express')

const routerArticulos = express.Router();
routerArticulos.use(express.json())

//base de datos
const {Articulos} = require('../services/serviciesArt.js')

// utilizar metodos

routerArticulos.get('/', async (req,res) => {
    try {
        const getArticulos = await Articulos();
        const elementos = await getArticulos();
        res.json(elementos);

    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = routerArticulos