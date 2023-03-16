const UserServices = require("../services/users.services");
const bcrypt = require("bcrypt")
const userLogin = async (req,res) => {

  try {
    const {email, password} = req.body;
    const user = await UserServices.getUser(email)
    if(!user){
      return res.status(400).json(error)
    }

    const isValid = await bcrypt.compare(password, user.password)
    if(!isValid){
      return res.status(400).json(error)
    }

    const {
      id,
      firstname,
      lastname,
      username
    } = user

    res.json({
      id,firstname,lastname,username,email
     })


  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
  userLogin
}