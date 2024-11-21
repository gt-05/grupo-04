const ProductModel = require('../../models/ProductModel');
const ProductImageModel = require('../../models/ProductImageModel');
const {saveByUrl} = require('../../services/product-images');

module.exports = async (request, response) => {
    let {
        name,
        slug,
        price,
        enabled,
        price_with_discount
    } = request.body;

    let product;

    try {
        product = await ProductModel.create({
            name, slug, price, enabled, price_with_discount
        });
    } catch(error) {
        response.status(400);
        return response.json({
            message: "Erro ao criar produto"
        });
    }
    
    try {
        let images = [];
        for (let url of request.body.images) {
            let {relativePath} = await saveByUrl({url, slug});
            images.push({
                product_id: product.id,
                path: relativePath
            });
        }

        await ProductImageModel.bulkCreate(images);
        response.status(201);
        return response.json(product);
    } catch (error) {
        console.log(error.message);
        response.status(400);
        return response.json({
            message: "Erro ao salvar imagens no produto " + product.id
        });
    }
}