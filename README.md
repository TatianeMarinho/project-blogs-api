✍️ Blogs API

Uma API para um sistema de gerenciamento de conteúdo de blog. A aplicação permite o cadastro de usuários, login com autenticação e a criação de posts vinculados a categorias, utilizando o Sequelize para mediar a comunicação entre o Node.js e o banco de dados MySQL.

🚀 Funcionalidades Principais

Autenticação JWT: Proteção de rotas para garantir que apenas usuários logados possam criar ou editar posts.

Relacionamentos Complexos: Implementação de associações do tipo 1:N (Um usuário tem muitos posts) e N:N (Muitos posts possuem muitas categorias).

CRUD de Usuários e Posts: Gerenciamento completo de perfis, categorias e artigos de blog.

Lógica de Autoria: Validação para garantir que um usuário só possa editar ou excluir seus próprios posts.

🧰 Stack Técnica

Node.js & Express.

Sequelize (ORM para modelagem e consultas ao banco de dados).

JWT (JSON Web Token) para autenticação e segurança.

MySQL como banco de dados relacional.

Arquitetura MSC (Model-Service-Controller).
