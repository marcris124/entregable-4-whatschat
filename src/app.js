const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const db = require("./utils/database")
const initModels = require("./models/initModels")
const usersRouter = require("./routes/users.routes")
const authRoutes = require("./routes/auth.routes")
const conversationsRoutes = require("./routes/conversations.routes")
initModels()

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

const PORT = 8000

db.authenticate()
.then(() =>{
  console.log("base de datos actualizada")
})
.catch((error) => { console.log(error);})

db.sync({force:false})
.then(() => console.log("base de datos async"))
.catch((error) => console.log(error))


app.use(usersRouter)
app.use(authRoutes)
app.use(conversationsRoutes)


app.listen(PORT,() =>{
  console.log(`servidor funcionando en el puerto ${PORT}`);
})