module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host : 'stalker_db.mysql.dbaas.com.br',
      port : 3306,
      user : 'stalker_db',
      password : 'ATBBgFgpr2kS@2',
      database : 'stalker_db'
    },
    migrations: {
      tableName: 'migrations',
      directory: './src/config/database/migrations'
    }
  }
};
