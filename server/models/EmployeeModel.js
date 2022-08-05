const mongoose = require('mongoose');
const { default: validator } = require('validator');

const EmployeeSchema = new mongoose.Schema({

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
    address: {
        place: {
            type: String,
            required: [true, "Please enter your place"],
            default: ""
        },
        city: {
            type: String,
            required: [true, "Please enter your city"],
            default: ""
        },
        state: {
            type: String,
            required: [true, "Please enter your state"],
            default: ""
        },
        country: {
            type: String,
            required: [true, "Please enter your country"],
            default: ""
        },
        pincode: {
            type: String,
            required: [true, "Please enter your pincode"],
            default: ""
        }          
    },
    age: { 
        type: Number, 
        min: 18,
        index: true 
    },
    role: {
        type: String,
        enum : ['employee','admin'],
        default: 'employee'
    },
    dateofjoining: {
        type: Date,
        default: Date.now,
      },

    

});

// Employees = mongoose.model('employees', EmployeeSchema);

// module.exports = Employees;



module.exports =  mongoose.model('Employee', EmployeeSchema);
