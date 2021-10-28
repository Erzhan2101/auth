const Blog = require("../models/blogModel")
const User = require("../models/userModel")

const getAllBlog = async (req, res) => {
    const blog = await Blog.find({}).populate("user")
    res.json(blog)
}

const createPost = async (req, res) => {
    try {
        const blogPost = new Blog(req.body)
        const savedPost = await blogPost.save()
        await User.findByIdAndUpdate(savedPost.user, {$push:{blog: savedPost._id}})
        res.json(savedPost)
    } catch (e) {
        res.status(400).json({message: "ошибка сохранения"})
    }
}

module.exports = {createPost, getAllBlog}