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

module.exports = {
  createUser,
  getUser,
  getUserAll
}