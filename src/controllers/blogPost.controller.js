const { blogPostService } = require('../services');
const mapStatusHTTP = require('../utils/mapHTTP');

const newBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const { id } = req.User;
  console.log(req.User);

  const { status, data } = await blogPostService.createPost(title, content, categoryIds, id);

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  newBlogPost,
};