const express = require("express");

const router = express.Router();

const { getAllEmployee, createEmployee ,  updateEmployee, deleteEmployee } = require("../controllers/employeeController.js");

router.get("/employee", getAllEmployee);

router.post("/employee/add", createEmployee);

router.put("/employee/:id", updateEmployee);

router.delete("/employee/:id", deleteEmployee);

module.exports = router;

