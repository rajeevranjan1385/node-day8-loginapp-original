const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    nam: String,
    email: String,
    password: String
})

mongoose.model('EduJan', UserSchema); //collection name and Schema

module.exports = mongoose.model('EduJan')
