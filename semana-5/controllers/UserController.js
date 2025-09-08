import USer from '../models/UserModel.js'

const newUser = async( request, response) => {
    const {nombre, email, password, foto} = request.body;
    const usuario = new User({nombre, email, password, foto});
    const data = await usuario.save();
    response.status(201).json({msg:"ok", data})
}

const listUsers = async(request, response) =>{
    const usuarios = await User.find();
    response.json(usuarios);
}

export {newUser, listUsers};
