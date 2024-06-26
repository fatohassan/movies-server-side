const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: {
    type: String,
    required: true,
    unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = {User: mongoose.model('User', userSchema)}