const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Conversations = db.define("conversations",{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  createdId:{
    type:DataTypes.INTEGER,
    allowNull:false,
    field:"users_id"
  },
  typesId:{
    type:DataTypes.INTEGER,
    allowNull:false,
    field:"types_id"
  },
  title:{
    type:DataTypes.STRING(50),
    allowNull:false
  },
  messageId:{
    type:DataTypes.INTEGER,
    allowNull:false,
    field:"message_id"
  }

},{
  timestamps:false,
  updatedAt:false
})

module.exports = Conversations