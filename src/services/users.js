const knex = require("../config/database");
const bcrypt = require('bcryptjs');

async function createUser ({nome, email, senha}) {
  try{
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(senha, salt);
    await knex('users').insert({
      name:nome,
      email:email,
      password:hash
    })
  }catch(e){
    throw e;
  }
}

async function getUser ({id}) {
  try{
    const user = await knex('users').select('*').where({
      id:id,
    }).first()

    return user;
  }catch(e){
    throw e;
  }
}

async function getUserAll () {
  try{
    const users = await knex('users').select('*');

    return users;
  }catch(e){
    throw e;
  }
}

async function updateUser(id, email, nome, senha) {
  try {
    const user = await knex('users').select('*').where({id})
    if(!user)
      throw new Error("Usuário não existe");
    
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(senha, salt);

      await knex('users').update({
        name: nome,
        password: hash
      }).where({id})

  }catch(e){
    throw e;
  }
}

async function deleteUser(id) {
  try {
    const user = await knex('users').select('*').where({id})
    if(!user)
      throw new Error("Usuário não existe");
    
    await knex('users').where({id}).delete()
  }catch(e){
    throw e;
  }
}

module.exports = {
  createUser,
  getUser,
  getUserAll,
  updateUser,
  deleteUser
}