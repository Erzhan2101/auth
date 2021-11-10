const Comments = require("../models/commentsModel")
const Blog = require("../models/blogModel")
const User = require("../models/userModel")

const addComments = async (req, res) => {
    const comment = new Comments(req.body)
    const savedComments = await comment.save()
    await Blog.findByIdAndUpdate(savedComments.blog, {$push: {comments: savedComments._id}}, {new: true})
    const user = await User.findById(savedComments.user)

    res.json({...savedComments.toObject(), user})
}

module.exports = {addComments}