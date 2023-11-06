const { categoryService } = require('../services');
const mapHTTP = require('../utils/mapHTTP');

const newCategory = async (req, res) => {
  const { body } = req;
  
  const { status, data } = await categoryService.createrCategory(body);
  
  return res.status(mapHTTP(status)).json(data);
};

const getCategories = async (_req, res) => {
  const { status, data } = await categoryService.getAllCategories();

  return res.status(mapHTTP(status)).json(data);
};

module.exports = {
  newCategory,
  getCategories,
};