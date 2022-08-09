import axios from 'axios';
import { data } from 'jquery';
import React, { useEffect, useState } from 'react'

const EmployeeList1 = () => {

  const [employees, setemployees] = useState([]);



  useEffect(() => {

    axios.get("http://localhost:5000/api/employee")
    .then((res) => {
      console.log(res.data.employee);
      setemployees(res.data.employee);
    })
    .catch((err) => {
      console.log(err);
    });
    
  }, []);
  




  return (

    <div>
      
      EmployeeList

      <div>

      

          <table class="table">

            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>          
                <th scope="col">Role</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Country</th>
                <th>Action
                    <span>Edit</span> <br />
                    <span>Delete</span>
                </th>
              </tr>
            </thead>

            <tbody>

            {
              employees.map((data , index) => (

                <tr>

                  <th scope="row">{index+1}</th>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.role}</td>
                  <td>{data.mobile}</td>
                  <td>{data.email}</td>
                  <td>{data.addressLine}</td>
                  <td>{data.city}</td>
                  <td>{data.state}</td>              
                  <td>{data.country}</td>
                  <td>
                    
                  </td>

                  </tr>

              ))
            }

             
            
            </tbody>
            
          </table>

      </div>
    
    </div>
  )
}

export default EmployeeList1;