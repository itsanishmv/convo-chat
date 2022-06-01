const mongoose = require("mongoose")

async function DbConnection() {
    try {
        const connectDB = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        console.log(`mongoDB connected ${connectDB.connection.host}`)
    } catch (error) {
        console.log(`error ${error.message}`)
    }
}

module.exports = DbConnection