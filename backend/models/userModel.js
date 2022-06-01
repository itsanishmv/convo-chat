const mongoose = require("mongoose")

const userModel = mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    pic: {
        type: String,
        default:'https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg'
    }
}, {
    timestamps:true
})

const user = mongoose.model("User", userModel)

module.exports = user