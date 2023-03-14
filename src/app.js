const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const db = require("./utils/database")

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())


db.authenticate()
.then(() =>{
  console.log("base de datos actualizada")
})
.catch((error) => { console.log(error);})

db.sync({force:false})
.then(() => console.log("base de datos async"))
.catch((error) => console.log(error))

const PORT = 8000

app.listen(PORT,() =>{
  console.log(`servidor funcionando en el puerto ${PORT}`);
})