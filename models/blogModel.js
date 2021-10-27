const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user:{
        // данные
        type: mongoose.Schema.Types.ObjectId, ref:"blog"
    }
}, {timestamps: true})

module.exports = mongoose.model("blogs", blogSchema)