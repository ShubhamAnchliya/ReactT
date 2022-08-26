const mongoose = require('mongoose');
const { default: validator } = require('validator');

const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "Please enter your  firstname"],
        maxLength:[30, "Please enter your  firstname"],
        minLength:[3, "Please enter your  firstname"]
    },
    lastName: {
        type: String,
        required: [true, "Please enter your lastname"],
        maxLength:[30, "Please enter your lastname"],
        minLength:[3, "Please enter your lastname"]
    },
    email: {
        type: String, 
        required: [true, "Please enter your email"],
        unique: [true, "email already exists in database!"],
        validate: [validator.isEmail, "Please enter valid email"]
    },
    mobile: {
        type: Number,
        required: [true, "Please enter your mobile number"],       
    },
    profilePic: {
        type: String,
        default: ""
    }

});



module.exports =  mongoose.model('User', UserSchema);
