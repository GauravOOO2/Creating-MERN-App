const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    UserName: String,
    password: String,
    email: String,
    phoneNumber: String
})

const User = mongoose.model('User', userSchema)

module.exports = {User}

