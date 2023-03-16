const { Router } = require("express");
const { registerUser, getAllUsers } = require("../controllers/users.controllers");

const router = Router()

router.get("/api/v1/users", getAllUsers)

router.post("/api/v1/users", registerUser)

module.exports= router