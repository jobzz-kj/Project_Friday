const { Sequelize } = require('sequelize');
//creating db with name codegig and uname as sqlite
//and pass as Welcome123
cosnt db = new Sequelize('codegig', 'sqlite','Welcome123',{
    host:'localhost',
    dialect: 'sqlite',
//pool is the way you deal with db,defining some properties like that

    pool:{
        max:5, //max no of threads
        min:0, //min no of threads
        acquire:30000,  //acquire the connection in 3ms
        idle: 10000   //connection can be idle for 1ms
    }
});

module.exports = db;