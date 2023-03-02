// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      priamryKey:true,
      autoIncrement:true,

    },
    product_name: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    price: {
      type:DataType.DECIMAL,
      allowNull:false,
      validate: {
        isDecimal:true,
      }
    },
    stock: {
      type:DataType.INTEGER,
      allowNull: false,
      defaultValue:10,
      validate: {
        isNumeric:true,
      }
    },
    categoryID: {
      type:DataType.INTEGER,
      reference: {
        category:ID
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
