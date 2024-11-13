const ProductModel = require('../../models/ProductModel');
const ProductImageModel = require('../../models/ProductImageModel');

module.exports = async (request, response) => {
    let products = await ProductModel.findAll({
        where: {
            slug: request.params.slug
        },
        include: {
            attributes: ['id', 'url', 'path'],
            model: ProductImageModel,
            as: 'images'
        }
    });

    return response.json(products);
}