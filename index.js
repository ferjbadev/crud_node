require('colors');
;const express = require('express');
const baseDatos = require('./db');
const usuarios = require('./routes/user')
require('dotenv').config()
const path = require('path');
const app = express();
puerto = process.env.PORT || 3030;

// Middleware
app.use(express.json());
app.use('/api', usuarios);

//Rutas
app.get('/', (req, res) =>{
  res.sendFile(path.resolve(__dirname, './html/index.html'));
});



app.listen(puerto, ()=>{
  console.log('Servidor Corriendo en el puerto: '.bgGreen,puerto);
})

// Conexion a mongo
baseDatos();
