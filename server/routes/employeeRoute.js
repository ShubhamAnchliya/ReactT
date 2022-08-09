const express = require("express");

const router = express.Router();

const { getAllEmployee, createEmployee ,getEmployeeById,  updateEmployee, deleteEmployee } = require("../controllers/employeeController.js");

router.get("/employee", getAllEmployee);

router.post("/employee/add", createEmployee);

router.put("/employee/:id", updateEmployee);

router.get("/employee/:id", getEmployeeById);


router.delete("/employee/:id", deleteEmployee);

module.exports = router;

