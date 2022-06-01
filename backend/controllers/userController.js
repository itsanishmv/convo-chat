const Users = require('../models/userModel')
const generateToken = require("../JWT")

async function signUpUser(req, res) {
    const { email, password, name, image } = req.body
    const userExists = await Users.findOne({ email })

    if (!userExists) {
        const user = await Users.create({
            name,
            email,
            password 
        })
        if (user) {
            res.status(201).send(`account created for ${user.name}`) 
            // res.json({
            //     message:`account created for ${user.name}`,
            //     // _id:user._id,
            //     // name :user.name,
            //     // email:user.email,
            //     token : generateToken(user._id)
            // })
            
        }
        
    } else {
       res.status(403).send("User already exists , please login")
    }
}

async function loginUser (req, res)  {
    const { loginEmail, loginPassword } = req.body
  
    const findUser = await Users.findOne({ email:loginEmail })
    if (findUser && findUser.password === loginPassword) {
        res.json({
            message:`logged in as ${findUser.name}`,
            // _id:user._id,
            // name :user.name,
            // email:user.email,
            token : generateToken(findUser._id)
        })
    } else {
        res.status(403).send("incorrect credentials , please signup!")
    }
}

async function searchUser(req, res) {
    const q = req.query.name ?  { name: { $regex: req.query.name, $options: "i" } } : {}
       
    const searchUser = await Users.find(q)
    console.log("results are here:-")
    res.json({searchUser})
}
module.exports = { signUpUser , loginUser , searchUser}