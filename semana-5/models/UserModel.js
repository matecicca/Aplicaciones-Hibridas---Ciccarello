import mongoose from "mongoose";
const Schema = mongoose.Schema

const miEsquema = new Schema({
    nombre : String,
    email: String,
    password: String,
    foto : String
})

const User = mongoose.model('User', miEsquema)

export default User;