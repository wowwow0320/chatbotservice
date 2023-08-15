const {DataTypes} = require("sequelize");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('Code', {
        code: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true,
        },
        top: {
            type: Sequelize.CHAR(255),
            allowNull: true,
        },
        mid: {
            type: Sequelize.CHAR(255),
            allowNull: true,
        },
        bot: {
            type: Sequelize.CHAR(255),
            allowNull: true,
        }
    },{
        timestamps: true,
        underscored: false,
        modelName: 'Code',
        tableName: 'code',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
}