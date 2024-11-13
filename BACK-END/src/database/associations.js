const ProductModel = require('../models/ProductModel')
const ProductImageModel = require('../models/ProductImageModel')

ProductModel.hasMany(ProductImageModel, {
    foreignKey: 'product_id',
    as: 'images'
});

ProductImageModel.belongsTo(ProductModel, {
    foreignKey: 'product_id',
    as: "products"
});