const PostCategoryTableSchema = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define('PostCategory', {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
      },
    }, {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false
    });
  
    PostCategoryTable.associate = ({ Category, BlogPost }) => {
        // muitas categorias para muitos blogpost
        Category.belongsToMany(BlogPost, {
        // especifica a tabela usada para a associaçao
        through: PostCategoryTable,
        // indica qual e a chave estrangeira usada da tabela category
        foreignKey: 'categoryId',
        // nesta tabela a coluna postId se refere aos registros de blogPost
        otherKey: 'postId',
        // realizar consultas pode-se usar este nome para esta associaçao
        as: 'blogPosts',
      });

        BlogPost.belongsToMany(Category, {
        through: PostCategoryTable,
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as:'categories',
        });
    };
  
    return PostCategoryTable;
  }
  
  module.exports = PostCategoryTableSchema;