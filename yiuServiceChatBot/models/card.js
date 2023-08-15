const {DataTypes} = require("sequelize");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('Card', {
        cid: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        text: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        btnTitle: {
            type: Sequelize.CHAR(255),
            allowNull: false,
        },
        btnType: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        btnLink: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        btnNext:{
            type: Sequelize.CHAR(255),
            allowNull: true,
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        }
    },{
        timestamps: false,
        underscored: false,
        modelName: 'Card',
        tableName: 'card',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
}