require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


//exportar rutas
const routerCertificate = require('./routers/Certificate.js');
const routerArticulos = require ('./routers/Article.js');
const routerStudios = require ('./routers/Studios.js');
const routerRedaccion = require('./routers/Redaccion.js');
const routerDate = require('./routers/date.js')
const routerNotice = require('./routers/Notices.js')
const routerChistes = require('./routers/Chistes.js')
const routerIntereses = require('./routers/Intereses.js')

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
app.use('/api/portafolio/studios', routerStudios);
app.use('/api/portafolio/redaccion', routerRedaccion);
app.use('/api/portafolio/date', routerDate);
app.use('/api/portafolio/notice', routerNotice);
app.use('/api/portafolio/chistes', routerChistes);
app.use('/api/portafolio/intereses', routerIntereses);


app.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola desde el backend, vamos a construir un portafolio!' });
});

// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`El servidor está escuchando en http://localhost:${puerto}`);
});
