const UserModel = require('../../models/UserModel');

module.exports = async (request, response) => {
    let {firstname, surname, email, password} = request.body;
    if(!firstname || !surname || !email || !password) {
        return response.status(400).json({message: "Dados invalidos"});
    }

    try {
        let user = await UserModel.create(request.body);
        return response.status(201).json(user);
    } catch (error) {
        return response.status(400).json({message: "Dados invalidos"});
    }  
}