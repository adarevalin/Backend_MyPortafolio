const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const routerLogin = express.Router();
routerLogin.use(express.json());


// Ruta para el inicio de sesión

routerLogin.post('/', async (req, res) => {
    // Simula la lógica de autenticación (deberías consultar una base de datos)
    const usuarioAutenticado = [
        {
            username: 'adarevalo',
            hashedPassword: '$2b$10$QRUN2aAo0UtSfixQmc8qEe.pIoqIio0FI6iw/Ketgu.ugsjeDb9Sa',
        },
    ];
    try {
        const { user, pass } = req.body;

        const usuarioEncontrado = usuarioAutenticado.find(users => users.username === user);
        
        if (!usuarioEncontrado) {
            throw new Error('Usuario no encontrado. Autenticación fallida.');
        }else {
             const result = await bcrypt.compare(pass, usuarioEncontrado.hashedPassword);

            if (result) {
                
                const secretKey = process.env.SECRET_KEY;
        
                const token = jwt.sign({ username: usuarioEncontrado.username }, secretKey, { expiresIn: '3h' });
    
                res.setHeader('Authorization', `Bearer ${token}`);
                res.setHeader('Access-Control-Expose-Headers', 'Authorization');

                res.status(200).json({ Mensaje: 'Contraseña hasheada exitosamente'});
                console.log('Contraseña válida. Autenticación exitosa.');

            } else {
                console.error('Contraseña inválida. Autenticación fallida.');
                res.status(401).json({ error: 'Contraseña inválida' });
            }
        }
    } catch (error) {
        console.error(error.message);
        res.status(401).json({ error: error.message });
    }
});

module.exports = routerLogin;
