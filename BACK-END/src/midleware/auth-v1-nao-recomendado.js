const UsetModel = require("../models/UserModel");

module.exports = async (request, response, next) => {
    let email = request.headers.email;
    let password = request.headers.password;

    if(!email || !password) {
        return response.json({
            message: "Você não tem autorização para acessar este recurso"
        });
    }

    let user = await UsetModel.findOne({
        where: {
            email, password: btoa(password)
        }
    });

    if(!user) {
        return response.json({
            message: "Você não tem autorização para acessar este recurso"
        });
    }

    next();
}