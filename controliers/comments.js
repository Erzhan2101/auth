const Comments = require("../models/comments")
const Blog = require("../models/blogModel")

const addComments = async (req, res) => {
    const comment = new Comments(req.body)
    const savedComments = await comment.save()
    await Blog.findByIdAndUpdate(savedComments.blog, {comments: savedComments._id})
    res.json({message: "save good"})
}

module.exports = {addComments}