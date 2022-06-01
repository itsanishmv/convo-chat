const jwt = require("jsonwebtoken")
const Users = require('./models/userModel')

const protectRoute = async (req, res, next) => {
    let token
    console.log(req.headers.authorization)
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
             token = req.headers.authorization.split(" ")[1]
            const decryptJWT = jwt.verify(token, process.env.JWT_SECRET)
            console.log(decryptJWT)
            req.user = await Users.findById(decryptJWT.id)

            next()
        } catch (error) {
            res.status(404).send("not authorized")
        }
    }
    else{
        res.status(404).send("no jwt found ")
      
    }
}

module.exports = {protectRoute}