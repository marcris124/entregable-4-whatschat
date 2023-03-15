const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Avatar = db.define("avatars",{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  image:{
    type:DataTypes.STRING,
    allowNull:false
  }



})

module.exports = Avatar