const express = require("express")
const {signin, signup,isAuthenticate} = require("../controliers/auth")
const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.post("/authenticate", isAuthenticate)

module.exports = router