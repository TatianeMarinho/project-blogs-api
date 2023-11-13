const { Category } = require('../models');

const createrCategory = async (name) => {
  const newCategory = await Category.create(name);
  
  return { status: 'CREATED', data: newCategory };
};

const getAllCategories = async () => {
  const listCategories = await Category.findAll();

  return { status: 'SUCCESSFUL', data: listCategories };
};

const findOneCategory = async (id) => {
  const category = await Category.findOne({ where: id });

  return category;
};

module.exports = {
  createrCategory,
  getAllCategories,
  findOneCategory,
};