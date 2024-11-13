const connection = require("../database/connection");
const {DataTypes} = require('sequelize');

const CategoryModel = connection.define('CategoryModel', {
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'category'
});

module.exports = CategoryModel;