const express = require('express');

const routerChistes = express.Router();
routerChistes.use(express.json())

const {GetChistes} = require ("../services/ServicesChistes");

routerChistes.get('/', async (req, res) => {
    try {
      const elementos = await GetChistes();
      res.json(elementos);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor GET' });
    }
  }); 

  module.exports = routerChistes