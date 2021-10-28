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
        // связь сдвумя коллекциями // данные //хранится только id
        type: mongoose.Schema.Types.ObjectId, ref:"users"
    }
}, {timestamps: true})

module.exports = mongoose.model("blogs", blogSchema)