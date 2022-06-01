const express = require("express")
const app = express()
const dotenv = require('dotenv')
const cors= require("cors")
const Db = require('./config/Db')

const UserRoute = require("./routes/UserRoute")
const PORT = 8000
app.use(cors())
dotenv.config()

Db()

app.use(express.json())
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

//signup and login api
app.use("/user",UserRoute)



