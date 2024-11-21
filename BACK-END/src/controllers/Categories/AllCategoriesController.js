const CategoryModel = require('../../models/CategoryModel');

module.exports = async (request, response) => {
        let categories = await CategoryModel.findAll({
            
        });
        return response.json(categories);
}