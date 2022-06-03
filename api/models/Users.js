       //Signup and Signin Schema\\

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
<<<<<<< HEAD
    _id: mongoose.Schema.Types.ObjectId,  // a unique id
    
=======
    _id: mongoose.Schema.Types.ObjectId,  
>>>>>>> c0782f4e47b6bd416a2740c713a70e634b2ee791
    email: String,
    password: String    //email and password for users
})

module.exports = mongoose.model('user', userSchema);
