const express = require("express")
const {addComments} = require("../controliers/comments");
const router = express.Router()

router.post("/", addComments)

module.exports = router