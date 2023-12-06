require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


//exportar rutas
const routerCertificate = require('./routers/Certificate.js')
const routerArticulos = require ('./routers/Article.js')
const routerProgramacion = require('./routers/programacion.js')

// crear app
const app = express();
const puerto =process.env.PORT || 8000; // Elige el puerto que prefieras

// ruta de inicio

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Uso de Routers
app.use('/api/portafolio/certificados', routerCertificate);
app.use('/api/portafolio/articulo', routerArticulos);
app.use('/api/portafolio/programacion', routerProgramacion);


app.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola desde el backend, vamos a construir un portafolio!' });
});

// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`El servidor está escuchando en http://localhost:${puerto}`);
});
