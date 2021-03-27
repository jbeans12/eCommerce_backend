// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

// Categories have many Products
Categories.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCASDE'
});

// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tag, {
  foreignKey: 'product_id',
  through:{
    model: ProductTag,
    unique: false
  },
  as: 'product_tags'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Products, {
  foreignKey:'tag_id',
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tags'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
