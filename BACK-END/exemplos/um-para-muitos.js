const ProductModel = require('../src/models/ProductModel');
const ProductImageModel = require('../src/models/ProductImageModel');

ProductModel.hasMany(ProductImageModel, {foreignKey: "product_id", as: 'images'});

async function execute() {
    let product = await ProductModel.findOne({
        include: {
            model: ProductImageModel,
            as: "images"
        }
    });
    console.log(product.images[1].path);
}

execute();