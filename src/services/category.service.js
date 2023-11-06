const { Category } = require('../models');

const createrCategory = async (name) => {
  const newCategory = await Category.create(name);
  
  return { status: 'CREATED', data: newCategory };
};

const getAllCategories = async () => {
  const listCategories = await Category.findAll();

  return { status: 'SUCCESSFUL', data: listCategories };
};

module.exports = {
  createrCategory,
  getAllCategories,
};