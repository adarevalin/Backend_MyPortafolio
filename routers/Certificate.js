const express = require('express');
const verificarToken = require('../database/auth.js');


const routerCertificate = express.Router();
routerCertificate.use(express.json())

//Servicio general de GET con select total
const ServicieGet = require('../services/ServiciesGet.js')
const ServicesPost = require("../services/ServiciesPost.js");
const ServiciesPut = require("../services/ServiciesPut.js")
const ServiciesDelete = require("../services/ServiciesDelete.js")

// servicios especificos para cada ruta
const Certificados = ServicieGet('Certificados')
const PostCertificado = ServicesPost('Certificados')
const PutCertificado = ServiciesPut('Certificados')
const DeleteCertificate = ServiciesDelete('Certificados')


routerCertificate.get('/', async (req, res) => {
    try {
      const getServicies = await Certificados();
      const elementos = await getServicies();
      res.json(elementos);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor GET' });
    }
  }); 

routerCertificate.post('/', verificarToken, async(req, res) => {
  const Nuevoarticulo = req.body;
  try {
    const PostServicies = await PostCertificado();
    const element = await PostServicies(Nuevoarticulo);
    res.json(element);

  } catch (error) {
    res.status(500).json({error: 'Error interno del servidor POST'})
  }
});

routerCertificate.put('/', verificarToken, async (req,res) => {
  const Nuevoarticulo = req.body;

  try {
    const PutServicie = await PutCertificado();
    const element = await PutServicie(Nuevoarticulo);
    res.json(element);
  } catch (error) {
    res.status(500).json({error: "Error interno del servidor PUT"})
  }
})

routerCertificate.delete('/:id', verificarToken, async(req,res) => {
  const id = req.params.id;
  try {
    const DeleteService = await DeleteCertificate();
    const element = await DeleteService(id);
    res.json(element)

  } catch (error) {
    res.status(500).json({error: "Error interno del servidor DELETE"})
  }
})



module.exports = routerCertificate