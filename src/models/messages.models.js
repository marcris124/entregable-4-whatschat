const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Messages = db.define("messages",{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  userId:{
    type:DataTypes.INTEGER,
    allowNull:false,
    field:"user_id"
  },
  message:{
    type:DataTypes.TEXT,
    allowNull:false
  }

},{
  timestamps:true,
  updatedAt:false,
  createdAt:"message_at"
})

module.exports = Messages
