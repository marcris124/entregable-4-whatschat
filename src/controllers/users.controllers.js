const UserServices = require("../services/users.services")

  const getAllUsers = async (req,res) => {
    try {
      const data = await UserServices.usersAll()
      res.json(data)
    } catch (error) {
      res.status(400).json(error)
    }
  }


const registerUser = async (req,res) => {
  try {
    const newUser = req.body
    const result = await UserServices.createUser(newUser)
    res.json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}




module.exports = {
  registerUser,
  getAllUsers
}