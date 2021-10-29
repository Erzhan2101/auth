const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const chalk = require("chalk")
require("dotenv").config()
const authRouter =require ("./routers/auth")
const BlogRouter =require ("./routers/blog")
const CommentRouter =require ("./routers/comments")

const server = express()
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log(chalk.blue("DB IS CONNECTED")))
    .catch(() => console.log(chalk.red("DB IS NOT CONNECTED")))

//мидилве
server.use(cors())
server.use(express.json())

server.use("/api/v1", authRouter)
server.use("/api/v1/blog", BlogRouter)
server.use("/api/v1/comments", CommentRouter)

const port = 8000
server.listen(process.env.PORT || port, () =>{
    console.log(chalk.magentaBright(`СЕРВЕР РАБОТАЕТ на порту ${port}`))
})

