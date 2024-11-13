const ProductImageModel = require("../../models/ProductImageModel");
const ProductModel = require("../../models/ProductModel");
const {saveByUrl} = require('../../services/product-images');

module.exports = async (request, response) => {

    let product = await ProductModel.findOne({
        where: {
            id: request.params.id
        }
    })

    let images = []
    try {
        for(let url of request.body) {
            let image = await saveByUrl({url, slug: product.slug});
            images.push({
                product_id: request.params.id,
                path: image.relativePath
            });
        }
    } catch(error) {
        response.status(400);
        return response.json({
            message: error.message
        });
    }

    images = await ProductImageModel.bulkCreate(images);
    response.status(201);
    return response.json(images)
}