const { Category } = require('../models');

const createrCategory = async (name) => {
  const newCategory = await Category.create(name);
  
  return { status: 'CREATED', data: newCategory };
};

module.exports = {
  createrCategory,
};