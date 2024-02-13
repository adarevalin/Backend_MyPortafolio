require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');

//exportar rutas
const routerCertificate = require('./routers/Certificate.js');
const routerArticulos = require ('./routers/Article.js');
const routerStudios = require ('./routers/Studios.js');
const routerRedaccion = require('./routers/Redaccion.js');
const routerDate = require('./routers/date.js')
const routerNotice = require('./routers/Notices.js')
const routerChistes = require('./routers/Chistes.js')
const routerIntereses = require('./routers/Intereses.js')
const routerEvent = require('./routers/Event.js')
const routerLogin = require('./routers/Login.js')

// crear app
const app = express();
const puerto = 8000 ||  process.env.PORT; // Puerto en el que escuchará la aplicación

// compresión de datos 
app.use(compression());
// ruta de inicio

app.use(bodyParser.json());


app.use(cors({ 
  credentials: true, 
  origin: ['http://localhost:3000', 'https://frontend-myportafolio.onrender.com', 'https://3001-cs-b69fbd4a-00fd-41b8-a255-b60bdb28f0d1.cs-us-east1-pkhd.cloudshell.dev'] 
}));

app.use(cookieParser()); // Configura cookie-parser
// Uso de Routers
app.use('/api/portafolio/certificados', routerCertificate);
app.use('/api/portafolio/articulo', routerArticulos);
app.use('/api/portafolio/studios', routerStudios);
app.use('/api/portafolio/redaccion', routerRedaccion);
app.use('/api/portafolio/date', routerDate);
app.use('/api/portafolio/notice', routerNotice);
app.use('/api/portafolio/chistes', routerChistes);
app.use('/api/portafolio/intereses', routerIntereses);
app.use('/api/portafolio/eventos', routerEvent);
app.use('/api/portafolio/login', routerLogin)


app.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola desde el backend, vamos a la api de un construir un portafolio!' });
});

// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`El servidor está escuchando en http://localhost:${puerto}`);
});
