const Employee = require("../models/EmployeeModel.js");

exports.createEmployee = (req, res) => {
    Employee.create(req.body)
        .then((employee) => {
            console.log({ employee });

            res.json({
                message: "Employee successfully added",
                employee
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: "Sorry Employee cannot be added",
                error: err.message 
            });
        });
};



exports.getAllEmployee = (req, res) => {
    Employee.find()
        .then((employee) => {
            console.log({ employee });
            res.json({employee});
        })
        .catch((err) => {
            res.status(404).json({
                message: "Sorry There isnt any Employee ",
                error: err.message 
            });
        });
};




exports.getEmployeeById =  (req, res) => {
    const id = req.params.id;
    Employee.findById(id)
        .then((employee) => {
         
          console.log({ employee });
          return res.status(200).json({employee});
        })
        .catch((err) => {
            res.status(404).json({
                message: "Sorry cannot get Employee by insereted id ",
                error: err.message 
            });
        });
};



exports.updateEmployee =  (req, res) => {

    const id = req.params.id;

    Employee.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((employee) => {
         
        //   console.log({ updatedData });
          return res.status(200).json({                
    
                message: "Employee details have successfully updated",
                // employee,
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: "Sorry cannot update Employee details ",
                error: err.message 
            });
        });
};




exports.deleteEmployee = (req, res) => {
    Employee.findByIdAndRemove(req.params.id, req.body)
        .then((employee) => {
            console.log({ employee });
            res.json({                
                message: "Employee have successfully deleted",
                // employee
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: "Sorry cannot delete Employee",
                error: err.message 
            });
        });
};
