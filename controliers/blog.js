const Blog = require ("../models/blogModel")

const getAllBlog = async (req, res) => {
    const blog = await Blog.find({})
    res.json(blog)
}

const createPost = async (req, res) => {
    const blogPost = new Blog(req.body)
    const savedPost = await blogPost.save()
    res.json(savedPost)
}

module.exports = {createPost,getAllBlog}