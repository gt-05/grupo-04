const connection = require('../database/connection');
const {DataTypes} = require('sequelize');

const ProductCategoryModel = connection.define('ProductCategoryModel', {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
            key: 'id',
            model: {
                tableName: 'product'
            }
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
            key: 'id',
            model: {
                tableName: 'category'
            }
        }
    }
}, {
    tableName: "product_category",
    timestamps: false
});

ProductCategoryModel.removeAttribute('id');

module.exports = ProductCategoryModel;