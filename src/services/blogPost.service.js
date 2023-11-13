const { PostCategory, BlogPost } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
  try {
    console.log(categoryIds);
    const newPost = await BlogPost.create({
      title, content, userId, published: new Date(), updated: new Date(),
    });
    console.log(newPost);
    const categoryPost = categoryIds.map((categoryId) => PostCategory
      .create({ postId: newPost.id, categoryId }));

    await Promise.all(categoryPost);

    return { status: 'CREATED', data: newPost };
  } catch (error) {
    return { status: 'ERROR_SERVER', data: 'Intenal Server Error' };
  }
};

module.exports = {
  createPost,
};