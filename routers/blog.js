const express = require("express")
const {getAllBlog,createPost,getBlog} = require("../controliers/blog");
const router = express.Router()

router.get("/", getAllBlog)
router.get("/:id", getBlog)
router.post("/", createPost)

module.exports = router