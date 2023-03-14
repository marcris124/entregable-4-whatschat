const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database:"entregable4",
  host:"localhost",
  port:5432,
  username:"postgres",
  password:"ritbiangulo123",
  dialect:"postgres",
  // logging:false,
})

module.exports = db


