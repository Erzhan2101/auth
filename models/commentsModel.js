const mongoose = require("mongoose")

const commentsSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId, ref: "blogs"
    },
    user:{
        // связь сдвумя коллекциями // данные //хранится только id
        type: mongoose.Schema.Types.ObjectId, ref:"users"
    }
}, {timestamps: true})

module.exports = mongoose.model("comments", commentsSchema)