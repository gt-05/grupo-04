const ProductImageModel = require('../../models/ProductImageModel');

module.exports = async (request, response) => {
        let productImage = await ProductImageModel.findAll({
            
        });
        return response.json(productImage);
}