const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/'

module.exports = () => {
  const conexion = () => {
    mongoose.connect(
      url, {
        keepAlive: true,
      },(error) => {
      if(error)
        console.log('Error de conexion'.bgRed);
      else{
        console.log('Conexion Exitosa!'.bgGreen);
      }

      }
    )
  }
  conexion();
}