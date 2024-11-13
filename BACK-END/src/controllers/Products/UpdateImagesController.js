const ProductImageModel = require('../../models/ProductImageModel');
const ProductModel = require('../../models/ProductModel');
const { saveByUrl } = require('../../services/product-images');

module.exports = async (request, response) => {
    let {id, imageId} = request.params;

    let product = await ProductModel.findOne({
        where: {id}
    });

    let image = await saveByUrl({url: request.body.url, slug: product.slug});

    await ProductImageModel.update({
        path: image.relativePath
    }, {
        where: {
            product_id: id,
            id: imageId
        }
    });

    return response.status(204).end();
}