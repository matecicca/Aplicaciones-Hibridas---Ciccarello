const express = require('express');
const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config();

//Creamos la conexion con la BBDD
const url_db = process.env.URI_DB
mongoose.connect(url_db)
const db = mongoose.connection;

db.on('error', () => (console.error('Error de Conexion')))
db.once('open', () => (console.log('Conexion a BBDD')))


const PORT = process.env.PORT;
const app = express();

app.use('/', (request, response) => {
    response.send('<h1> API REST </h1>');
})

app.listen( PORT, () => {
    console.log(`API rest en el puerto ${PORT}`);
})