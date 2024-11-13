const connection = require('../src/database/connection');
const { DataTypes } = require("sequelize");

const UserAccessModel = connection.define("UserAccessModel", {
    email: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "user_acess"
});

UserAccessModel.sync();

module.exports = UserAccessModel;