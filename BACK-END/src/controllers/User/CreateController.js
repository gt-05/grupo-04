const UserModel = require('../../models/UserModel');

module.exports = async (request, response) => {
    let user = await UserModel.create(request.body);
    return response.json(user);
}