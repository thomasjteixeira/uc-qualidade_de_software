class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static renderUser(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email
    };
  }

  // método estático para criar um novo usuário, sem precisar instanciar a classe
  // recebe um array de usuários e os dados do novo usuário
  static create(users, data) {
    const newUser = new User(users.length + 1, data.name, data.email, data.password);
    users.push(newUser);
    return this.renderUser(newUser);
  }

  // método estático para listar todos os usuários
  // recebe um array de usuários e retorna um array com os dados de todos os usuários, sem a senha
  static listAllUsers(users) {
    return users.map(user => this.renderUser(user));
  }

  static listUser(users, id) {
    const user = this.findById(users, id);
    if (user) {
      this.renderUser(user);
    }
    return null;
  }

  // método estático para buscar um usuário pelo id
  static findById(users, id) {
    return users.find(user => user.id === id);
  }

  // método estático para atualizar um usuário
  // recebe um array de usuários, o id do usuário a ser atualizado e os novos dados
  static update(users, id, data) {
    const user = this.findById(users, id);
    if (user) {
      user.name = data.name || user.name;
      user.email = data.email || user.email;
      user.password = data.password || user.password;
    }
    return user;
  }

  // método estático para deletar um usuário
  // recebe um array de usuários e o id do usuário a ser deletado
  static delete(users, id) {
    const user = this.findById(users, id);
    if (user) {
      const index = users.indexOf(user);
      users.splice(index, 1);
      return true;
    }
    return false;
  }

  // método estático para fazer login
  // recebe um array de usuários, email e senha
  static login(users, email, password) {
    const user = users.find(user => user.email === email && user.password === password);
    return user ? true : false;
  }
}

module.exports = User;
