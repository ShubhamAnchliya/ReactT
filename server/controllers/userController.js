const User = require("../models/UserModel.js");
const multer = require('multer');
let path = require('path');

exports.createUser = (req, res) => {
    User.create(req.body)
        .then((user) => {
            console.log({ user });

            res.json({
                message: "User successfully added",
                user
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: "Sorry User cannot be added",
                error: err.message 
            });
        });
};



exports.getAllUser = (req, res) => {
    User.find()
        .then((user) => {
            console.log({ user });
            res.json({user});
        })
        .catch((err) => {
            res.status(404).json({
                message: "Sorry There isnt any User ",
                error: err.message 
            });
        });
};




exports.getUserById =  (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .then((user) => {
         
          console.log({ user });
          return res.status(200).json({user});
        })
        .catch((err) => {
            res.status(404).json({
                message: "Sorry cannot get User by insereted id ",
                error: err.message 
            });
        });
};



exports.updateUser =  (req, res) => {

    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((user) => {
         
        //   console.log({ updatedData });
          return res.status(200).json({                
    
                message: "User details have successfully updated",
                // user,
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: "Sorry cannot update User details ",
                error: err.message 
            });
        });
};




exports.deleteUser = (req, res) => {
    User.findByIdAndRemove(req.params.id, req.body)
        .then((user) => {
            console.log({ user });
            res.json({                
                message: "User have successfully deleted",
                // user
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: "Sorry cannot delete User",
                error: err.message 
            });
        });
};
