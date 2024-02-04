const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

const verificarToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ mensaje: 'Token no proporcionado' });
  }

  try {
    const decodedToken = jwt.verify(token.split(' ')[1], secretKey);
    req.user = decodedToken;  // Si quieres hacer algo con la información del usuario en las rutas protegidas
    next();
  } catch (error) {
    console.error('Error al verificar el token:', error.message);
    return res.status(401).json({ mensaje: 'Token no válido' });
  }
};

module.exports = verificarToken;
