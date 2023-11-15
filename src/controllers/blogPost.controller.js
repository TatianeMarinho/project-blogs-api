const { blogPostService } = require('../services');
const mapStatusHTTP = require('../utils/mapHTTP');

const newBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const { id } = req.User;

  const { status, data } = await blogPostService.createPost(title, content, categoryIds, id);

  return res.status(mapStatusHTTP(status)).json(data);
};

const getBlogPost = async (_req, res) => {
  const { status, data } = await blogPostService.getAllPost();

  return res.status(mapStatusHTTP(status)).json(data);
};

const findBlogPost = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await blogPostService.findOnePost(id);

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  newBlogPost,
  getBlogPost,
  findBlogPost,
};