const ProductImageModel = require('../../models/ProductImageModel');

module.exports = async (request, response) => {
    let images = await ProductImageModel.findAll({
        attributes: ['url', 'id', 'path'],
        where: {
            product_id: request.params.id
        }
    });

    response.json(images);
}