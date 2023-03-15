const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Types = db.define("type_chat",{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
  },
  name:{
    type: DataTypes.STRING(35),
    allowNull:false
  }
},{
  timestamps:false
})

module.exports = Types