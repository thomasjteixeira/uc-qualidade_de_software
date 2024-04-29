const express = require('express');
const app = express();
const User = require('./User');

// Middleware para o Express reconhecer JSON no corpo da requisição
app.use(express.json());

// Array de usuários, futuramente será um banco de dados
let users = [];

// Rota inicial
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Salvar um usuário
// Recebe os dados do usuário no corpo da requisição(body) e
// retorna status 201 Created, com o usuário criado no corpo da resposta
app.post('/users', (req, res) => {
  const user = User.create(users, req.body); 
  res.status(201).json(User.renderUser(user)); // Devolvo a resposta sem incluir a senha
});

// Listar todos os usuários
// Retorna um array com todos os usuários cadastrados
app.get('/users', (req, res) => {
  const userList = User.listAllUsers(users);
  res.json(userList);
});

// Atualizar um usuário
// Recebe os novos dados do usuário no corpo da requisição(body) e
// retorna o usuário atualizado no corpo da resposta
// Se o usuário não for encontrado, retorna status 404 Not Found
app.put('/users/:id', (req, res) => {
  const updatedUser = User.update(users, parseInt(req.params.id), req.body);
  if (updatedUser) {
    res.json(User.renderUser(updatedUser));
  } else {
    res.status(404).send('User not found');
  }
});

// Deletar um usuário
// Retorna status 204 No Content se o usuário for deletado com sucesso
app.delete('/users/:id', (req, res) => {
  const success = User.delete(users, parseInt(req.params.id));
  if (success) {
    res.status(204).send('User deleted');
  } else {
    res.status(404).send('User not found');
  }
});

// Login de usuário
// Recebe email e senha no corpo da requisição e
// retorna status 200 OK se o login for bem-sucedido
// ou status 401 Unauthorized se o login falhar
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const isLoggedIn = User.login(users, email, password);
  if (isLoggedIn) {
    res.status(200).send(`Login successful, Welcome! ${email}`);
  } else {
    res.status(401).send('Invalid email or password');
  }
});

// Inicializa o servidor na porta 3000
// Acesse http://localhost:3000
// Para rodar o servidor, execute: node app.js
// Para testar as rotas, utilize o thunder client do VSCode
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
