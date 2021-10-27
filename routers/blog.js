const express = require("express")
const {getAllBlog,createPost} = require("../controliers/blog");
const router = express.Router()

router.get("/", getAllBlog)
router.post("/", createPost)

module.exports = router