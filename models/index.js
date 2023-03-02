// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { FOREIGNKEYS } = require('sequelize/types/lib/query-types');

// Products belongsTo Category

Product.belongsTo(Category,{
  foreignKey: "category_id"
})

// Categories have many Products

Category.hasMany(Products)

// Products belongToMany Tags (through ProductTag)

Products.belongsToMany(Tag, {
  through:"product_tag",
}
  )
  
// Tags belongToMany Products (through ProductTag)

Tags.belongsToMany(Product, {
  through:"product_tag",
  foreignKey: "product_id",
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
