const ProductModel = require('../src/models/ProductModel');
const CategoryModel = require('../src/models/CategoryModel');

ProductModel.belongsToMany(CategoryModel, {
    foreignKey: "category_id",
    otherKey: "product_id",
    through: 'product_category',
    as: 'categories',
    timestamps: false
});

async function execute() {
    let product = await ProductModel.findOne({
        include: {
            model: CategoryModel,
            as: "categories"
        }
    });
    console.log(product.toJSON());
}

execute();