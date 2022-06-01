const Express = require('express')
const { signUpUser, loginUser, searchUser } = require("../controllers/userController")
const{ protectRoute} = require("../middleware")
const router = Express.Router()

router.post('/signup',signUpUser)
router.post('/login', loginUser)
router.get('/search',protectRoute, searchUser)



module.exports = router