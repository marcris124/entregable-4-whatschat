const Users = require("../models/users.models");

class UserServices{

  static async usersAll(){
    try {
      const getUsersAll = await Users.findAll({
        attributes:["id","username","email","avatarId"]
      })
      return getUsersAll
    } catch (error) {
      throw error
    }
  }


  static async getUser(email){
    try {
      const user = await Users.findOne({
        where:{email}
      })
      return user
    } catch (error) {
      throw error
    }
  }


  static async createUser(newUser){
    try {
      const register = await Users.create(newUser)
      return register
    } catch (error) {
      throw error
    }
  }


}

module.exports = UserServices