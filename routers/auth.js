const express = require("express")
const {signin, signup,isAuthenticate,getUserInfo} = require("../controliers/auth")
const router = express.Router()

router.get("/user/:id", getUserInfo)
router.post("/signup", signup)
router.post("/signin", signin)
router.post("/authenticate", isAuthenticate)

module.exports = router