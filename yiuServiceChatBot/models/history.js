const {DataTypes} = require("sequelize");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('History', {
        hid: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        question: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        code: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
    },{
        timestamps: false,
        underscored: false,
        modelName: 'History',
        tableName: 'history',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
}