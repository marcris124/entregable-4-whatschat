const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Participants = db.define("participants", {

  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
   usersId:{
    type:DataTypes.INTEGER,
    allowNull:false,
    field:"users_id"
   },
   conversationsId:{
    type:DataTypes.INTEGER,
    allowNull:false,
    field:"conversations_id"
   }


})

module.exports = Participants