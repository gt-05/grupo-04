const ProductModel = require('../../models/ProductModel');
const ProductImageModel = require('../../models/ProductImageModel');

module.exports = async (request, response) => {
    //  return response.end(request.teste);
    let products = await ProductModel.findAll({
        where: {
            enabled: true
        },
        include: {
            attributes: ['id', 'url', 'path'],
            model: ProductImageModel,
            as: 'images'
        }
    });
    return response.json(products);
}