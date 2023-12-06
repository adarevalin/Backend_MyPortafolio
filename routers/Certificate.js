const express = require('express');

const routerCertificate = express.Router();
routerCertificate.use(express.json())

//Base de datos
const {Certificados} = require('../services/serviciesCer.js')


routerCertificate.get('/', async (req, res) => {
    try {
      const getCertificados = await Certificados();
      const elementos = await getCertificados();
      res.json(elementos);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
  }); 


module.exports = routerCertificate