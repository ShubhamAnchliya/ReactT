const express = require("express");

const router = express.Router();

const { getAllUser, createUser ,getUserById,  updateUser, deleteUser } = require("../controllers/userController.js");

router.get("/user", getAllUser);

router.post("/user/add", createUser);

router.put("/user/:id", updateUser);

router.get("/user/:id", getUserById);


router.delete("/user/:id", deleteUser);

module.exports = router;

