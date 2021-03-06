const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 26,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        max: 26,
        trim: true
    },
    role: {
        type: String,
        default: "user"
    },
    blog:[{
        // связь сдвумя коллекциями // данные // хранится только id
        type: mongoose.Schema.Types.ObjectId, ref:"blogs"
    }]
}, {timestamps: true})

userSchema.pre("save", async function (next) {
    const user = this
    user.password = await bcrypt.hash(user.password, 10)
    console.log(user)
    next()
})

userSchema.methods.authenticate = function (password) {
    const user = this
    return bcrypt.compare(password, user.password)
}

module.exports = mongoose.model("users", userSchema)