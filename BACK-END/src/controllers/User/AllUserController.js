const UserModel = require('../../models/UserModel');

module.exports = async (request, response) => {
    response.json(await UserModel.findAll({
        attributes: {
            exclude: ['password']
        }
    }));
}