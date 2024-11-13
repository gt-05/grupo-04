const ProductModel = require('../src/models/ProductModel');
const CategoryModel = require('../src/models/CategoryModel');
const ProductImageModel = require('../src/models/ProductImageModel');

ProductModel.belongsToMany(CategoryModel, {
    foreignKey: "category_id",
    otherKey: "product_id",
    through: 'product_category',
    as: 'categories',
    timestamps: false
});

ProductModel.hasMany(ProductImageModel, {
    foreignKey: 'product_id',
    as: 'images'
});

async function execute() {
    let product = await ProductModel.findOne({
        include: [
            {
                model: CategoryModel,
                as: "categories"
            }, 
            {
                model: ProductImageModel,
                as: 'images'
            }
        ]
    });
    
    console.log(product.toJSON());
}

execute();