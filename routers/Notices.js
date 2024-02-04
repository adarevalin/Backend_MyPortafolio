const express = require('express');

const routerNotice = express.Router();
routerNotice.use(express.json())

const {GetNotice} = require ("../services/servicesNotices");

routerNotice.get('/', async (req, res) => {
    try {
      const elementos = await GetNotice();
      res.json(elementos);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor GET' });
    }
  }); 

  module.exports = routerNotice;