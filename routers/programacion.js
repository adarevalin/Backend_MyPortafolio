const express = require('express');

// base de datos, servicios
const {serArticulo} = require('../services/servicies.js')


const routerProgramacion = express.Router();
routerProgramacion.use(express.json())

// metodos de get y post de '/'
routerProgramacion.get('/', async (req, res) => {
  try {
    const elementos = await serArticulo();
    res.json(elementos);
    
  } catch (error) {
      res.status(500).json({ error: 'Error interno del servidor' });
  }
});  

  routerProgramacion.post('/', async (req,res)=>{
    const Nuevoarticulo = req.body;
    try {
        const articulos = await dbService.crearArticulo(Nuevoarticulo);
        res.json(articulos);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
  })


  //con propiedades
  routerProgramacion.get('/:nombre', async (req, res) => {
    try {
      const articulos = await dbService.getArticulos();
      res.json(articulos);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
  });  


// exportar modulo a la ruta principal
  module.exports  = routerProgramacion;