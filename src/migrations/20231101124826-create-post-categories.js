'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('posts_categories', {
    postId: {
      field: post_id,
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE', 
      references: {
        model: 'blog-posts',
        key: 'id',
      },
    },
    categoryId: {
      field: category_id,
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'categories',
        key: 'id',
      },
    },
   });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('post_categories')
  },
};
