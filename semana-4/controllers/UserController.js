const User = require('../models/UserModel.js')

const newUser = async( request, response) => {
    const {nombre, email, password, foto} = request.body;
    const usuario = new User({nombre, email, password, foto});
    await usuario.save()
}