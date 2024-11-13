const connection = require('../database/connection');
const {DataTypes} = require('sequelize');

const UserModel = connection.define("UserModel", {
    firstname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(45),
        allowNull: null
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: "user"
});

module.exports = UserModel;