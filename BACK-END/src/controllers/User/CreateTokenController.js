const UserModel = require('../../models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = async (request, response) => {
    let {email, password} = request.body;

    if(!email || !password) {
        response.status(400);
        return response.json({
            message: "Email ou senha incorreto"
        });
    }

    let user = await UserModel.findOne({
        where: {email}
    });
    let isValidUser = false;
    if(user) {
        isValidUser = bcrypt.compareSync(password.toString(), user.password);
    }

    if(!isValidUser) {
        response.status(400);
        return response.json({
            message: "Usuario não autorizado"
        });
    }

    let token = jwt.sign({id: user.id}, process.env.SECRET, {expiresIn: '24h'});

    return response.json({token});

}