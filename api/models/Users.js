       //Signup and Signin Schema\\

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,  // a unique id
    
    email: String,
    password: String    //email and password for users
})

module.exports = mongoose.model('user', userSchema);