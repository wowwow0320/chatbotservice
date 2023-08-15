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
        btnType1: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        btnTitle1: {
            type: Sequelize.CHAR(255),
            allowNull: true,
        },
        btnLink1: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        btnType2: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        btnTitle2: {
            type: Sequelize.CHAR(255),
            allowNull: true,
        },
        btnLink2: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        btnType3: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        btnTitle3: {
            type: Sequelize.CHAR(255),
            allowNull: true,
        },
        btnLink3: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    },{
        timestamps: true,
        underscored: false,
        modelName: 'Card',
        tableName: 'card',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
}