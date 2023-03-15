const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Users = db.define("users",{

  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
  },
  username:{
    type:DataTypes.STRING(30),
    unique:true,
    allowNull:false
  },
  email:{
    type: DataTypes.STRING(50),
    unique:true,
    allowNull:false,
    validate:{
      isEmail:true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull:false
  },
  firstname:{
    type:DataTypes.STRING(40),

  },
  lastname:{
    type:DataTypes.STRING(40)
  },
  avatarId:{
    type:DataTypes.INTEGER,
    allowNull:true,
    field:"avatar_id"
  }

  
})

module.exports = Users