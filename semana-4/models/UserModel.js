const mongoose = require('mongoose')
const Schema = mongoose.Schema

const miEsquema = new Schema({
    nombre : String,
    email: String,
    password: String,
    foto : String
})

const User = mongoose.model('User', esquema)

module.exports = User;