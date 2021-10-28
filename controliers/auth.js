const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

//регистратция
const signup = (req, res) => {
    const {name, email, password} = req.body
    User.findOne({email}).exec((error, user) => {
        if (user) {
            return res.status(404).json({message: "Такой пользователь уже есть"})
        }
        const newUser = new User(req.body)
        newUser.save((error, user) => {
            if (error) {
                return res.status(400).json({message: "ошибка сохранения"})
            }
            return res.json({message: "пользователь успешно зарегистрирован, Войдите !"})
        })
    })
}


const signin = (req, res) => {
    const {email, password} = req.body
    User.findOne({email}).exec(async (error, user) => {
        console.log(user)
        if (!user) {
            return res.status(400).json({message: "пользователь не существует"})
        }
        if (!await user.authenticate(password)) {
            return res.status(401).json({message: "Неверный пароль"})
        }
        const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY, {expiresIn: "2d"})
        return res.json({
            token,
            user: {_id: user._id, email: user.email, name: user.name, role: user.role}
        })
    })
}

const isAuthenticate = async (req, res) => {
    const token = req.body.token
    try {
        if (!token) {
            res.status(401).json({message: "NOT is TOKEN"})
        }
        const payload = jwt.verify(req.body.token, process.env.SECRET_KEY)
        const user = await User.findOne({_id: payload._id})
        res.json({token, user: {_id: user._id, email: user.email, name: user.name, role: user.role}})
    } catch (e) {
        return res.status(401).json({message: "invalid token"})
    }
}

const getUserInfo = async (req, res) => {
    try{
       const user = await  User.findById(req.params.id)
    }catch (e)  {
        res.status(400).json({message: "NO USER"})
    }
}

module.exports = {signin, signup, isAuthenticate,getUserInfo}

