const { PostCategory, BlogPost, Category, User } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
  try {
    const newPost = await BlogPost.create({
      title, content, userId, published: new Date(), updated: new Date(),
    });

    const categoryPost = categoryIds.map((categoryId) => PostCategory
      .create({ postId: newPost.id, categoryId }));

    await Promise.all(categoryPost);

    return { status: 'CREATED', data: newPost };
  } catch (error) {
    return { status: 'ERROR_SERVER', data: 'Intenal Server Error' };
  }
};

const getAllPost = async () => {
  const listBlogs = await BlogPost.findAll({
    // especifica os models relacionados que devem ser inclusos na pesquisa
    include: [
      { model: User,
        as: 'user',
        attributes: { exclude: ['password'] } },
      { model: Category,
        as: 'categories',
        // nao inclui nenhum atributo da tabela de associaçao entre blogPost e category
        through: { attributes: [] } },
    ],
  });

  return ({ status: 'SUCCESSFUL', data: listBlogs });
};

module.exports = {
  createPost,
  getAllPost,
};