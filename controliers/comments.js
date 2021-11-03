const Comments = require("../models/commentsModel")
const Blog = require("../models/blogModel")

const addComments = async (req, res) => {
    const comment = new Comments(req.body)
    const savedComments = await comment.save()
    await Blog.findByIdAndUpdate(savedComments.blog, {$push:{comments: savedComments._id}})
    res.json(savedComments)
}

module.exports = {addComments}