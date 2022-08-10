import React, { useEffect } from 'react';
import "./EditEmployee.css";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'react-toastify/dist/ReactToastify.css';
import "../../../node_modules/react-toastify/dist/ReactToastify.css";


const AddEmployee = () => {

  const navigate = useNavigate();

  const { id } = useParams();


  const [employee, setEmployee] = useState({

    firstName : "",
    lastName : "",
    email : "",
    mobile : "",
    addressLine : "",
    city : "",
    state : "",
    country : "",
    pincode : "",
    branch : "",
    // dob : new Date(),
    role : ""

  });

  const {
    firstName,
    lastName,
    email,
    mobile,
    addressLine,
    city,
    state,
    country,
    pincode,
    branch,
    role
    // dob,
     
  } = employee;

  const InputEvent = async (e) => {
    setEmployee({
      ...employee, [e.target.name]: e.target.value
    })

    // console.log("e.target.value", e.target.value);

  };

  useEffect(() => {
    // console.log("Employeedata use_effect");
    loadEmployeData();
  }, []);

  const loadEmployeData = async  () => {
    const res = await axios.get(`http://localhost:5000/api/employee/${id}` );
    console.log("getEmpres.data", res.data.employee);
    setEmployee(res.data.employee); 
  };

 
  const formSubmit =  (e) => {
    e.preventDefault();

    // console.log("UpdateemployeeSubmit", employee);

    axios
    .put(`http://localhost:5000/api/employee/${id}`, employee)
    .then((res) => {     

      console.log("resDataMessage",res.data.message);

    // //   setEmployee('');



      
    })
    // .catch((err) => {
    //   console.log("Error couldn't add employee");
    //   console.log(err.message);
    // });
    loadEmployeData();

  

    navigate("/employees");


    toast.success(' Employee record has been updated!'
    // , {
    //   position: "top-right",
    //   autoClose: 2000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: false,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark"
   
    //   }
      
      );

   

  }

  return (
    
    <>

      <div className="row">

        <div className="col-xl-9">


          <div className="m-portlet">

          
            <div className="m-portlet__head">
              <div className="m-portlet__head-caption">
                <div className="m-portlet__head-title">
                  <h3 className="m-portlet__head-text">
                    Edit Employee 
          
                  </h3>
                </div>
              </div>
            
            </div>

         
            <div className="m-wizard  m-wizard--step-last" id="m_wizard">
     
              <div className="m-wizard__form">

           
                <form className="m-form m-form--label-align-left- m-form--state-" id="m_form" onSubmit={formSubmit} >

                
                  <div className="m-portlet__body">
                   
                    <div className="m-wizard__form-step m-wizard__form-step--current" id="m_wizard_form_step_1">
                      
                      <div className="row">

                        <div className="col-xl-8 offset-xl-2">

                          <div className="m-form__section m-form__section--first">

                            <div className="m-form__heading">
                              <h3 className="m-form__heading-title">Edit Employee Details</h3>
                            </div>

                            <div className="form-group m-form__group row">

                              <label className="col-xl-3 col-lg-3 col-form-label">* First Name:</label>

                              <div className="col-xl-9 col-lg-9">

                                <input
                                  type="text"
                                  name="firstName"
                                  className="form-control m-input" 
                                  placeholder="Please enter your first name" 
                                  value={firstName}
                                  onChange={InputEvent}                                
                                  required                                 
                                />                    

                              </div>

                            </div>

                            <div className="form-group m-form__group row">

                              <label className="col-xl-3 col-lg-3 col-form-label">* Last Name:</label>

                              <div className="col-xl-9 col-lg-9">

                                <input
                                  type="text"
                                  name="lastName" className="form-control m-input"
                                  placeholder="Please enter your last name"
                                  value={lastName}
                                  onChange={InputEvent}                                
                                  required
                                />                           

                              </div>

                            </div>

                            <div className="form-group m-form__group row">

                              <label className="col-xl-3 col-lg-3 col-form-label">* Email:</label>

                              <div className="col-xl-9 col-lg-9">

                                <input
                                  type="email" 
                                  name="email" 
                                  className="form-control m-input"
                                  placeholder="Please enter your email"
                                  value={email}
                                  onChange={InputEvent}                                
                                  required
                                />
                                
                              </div>

                            </div>

                            <div className="form-group m-form__group row">

                              <label htmlFor="mobile" className="col-xl-3 col-lg-3 col-form-label">* Phone</label>

                              <div className="col-xl-9 col-lg-9">

                                <div className="input-group">

                                  <div className="input-group-prepend"><span className="input-group-text"><i className="la la-mobile"></i></span></div>
                                  <input
                                    type="number"
                                    name="mobile" 
                                    className="form-control m-input"
                                    placeholder="Please enter your mobile number"
                                    value={mobile}
                                    onChange={InputEvent}                                  
                                    required
                                  />

                                </div>
                              
                              </div>

                            </div>

                          </div>

                          <div className="m-separator m-separator--dashed m-separator--lg"></div>

                          <div className="m-form__section">

                            <div className="m-form__heading">

                              <h3 className="m-form__heading-title">
                                Address                                
                              </h3>

                            </div>

                            <div className="form-group m-form__group row">

                              <label className="col-xl-3 col-lg-3 col-form-label">* Address Line:</label>

                              <div className="col-xl-9 col-lg-9">

                                <input
                                  type="text"
                                  name="addressLine" 
                                  className="form-control m-input"
                                  placeholder="Please enter your address line"
                                  value={addressLine}
                                  onChange={InputEvent}                                
                                  required 
                                />
                              
                              </div>

                            </div>                  

                            <div className="form-group m-form__group row">

                              <label className="col-xl-3 col-lg-3 col-form-label">* City:</label>

                              <div className="col-xl-9 col-lg-9">

                                <input
                                  type="text"
                                  name="city" 
                                  className="form-control m-input"
                                  placeholder="Please enter your city"
                                  value={city}
                                  onChange={InputEvent}                                
                                  required 
                                />

                              </div>

                            </div>

                            <div className="form-group m-form__group row">

                              <label className="col-xl-3 col-lg-3 col-form-label">* State:</label>

                              <div className="col-xl-9 col-lg-9">

                                <input
                                  type="text"
                                  name="state"
                                  className="form-control m-input"
                                  placeholder="Please enter your state" 
                                  value={state}
                                  onChange={InputEvent}                                
                                  required                                    
                                />

                              </div>

                            </div>

                            <div className="form-group m-form__group row">

                              <label className="col-xl-3 col-lg-3 col-form-label">* Country:</label>

                              <div className="col-xl-9 col-lg-9">

                                <input
                                  type="text"
                                  name="country"
                                  className="form-control m-input"
                                  placeholder="Please enter your country" 
                                  value={country}
                                  onChange={InputEvent}                                
                                  required                                    
                                />

                              </div>

                            </div>                  

                            <div className="form-group m-form__group row">

                                <label className="col-xl-3 col-lg-3 col-form-label">* Pincode:</label>

                                <div className="col-xl-9 col-lg-9">

                                  <input
                                    type="number"
                                    className="form-control m-input"
                                    name="pincode" 
                                    placeholder="Please enter your pincode" 
                                    value={pincode}
                                    onChange={InputEvent}                                  
                                    required 
                                  />

                                </div>

                            </div>

                          </div>

                          <div className="m-separator m-separator--dashed m-separator--lg"></div>


                          <div className="m-form__section">

                            <div className="m-form__heading">
                                <h3 className="m-form__heading-title">Other Details</h3>
                            </div>

                            <div className="form-group m-form__group row">

                                <div className="col-lg-6 m-form__group-sub">

                                    <label className="form-control-label">* Employee Role:</label>

                                    <div className="m-radio-inline">

                                        <label className="m-radio m-radio--solid m-radio--brand">

                                            <input
                                                type="radio" 
                                                name="role"
                                                value="employee"
                                                id="employee"

                                                
                                            //  onChange={handleChange} name="gender" 
                                                // name="employee"
                                                // id="1"
                                                isSelected={role === "Employee"}
                                                // value="Employee"
                                                onChange={InputEvent}   
                                                // value="2" 
                                                required                                            
                                            />

                                            Employee

                                            <span></span>

                                        </label>

                                        <label className="m-radio m-radio--solid m-radio--brand">

                                            <input
                                                type="radio" 
                                                name="role"
                                                value="admin"
                                                isSelected={role === "Admin"}
                                                id="admin"
                                                // type="radio" 
                                                // name="admin" 
                                                // id="2"
                                            
                                                // value="Admin"
                                                onChange={InputEvent}   
                                                // value="2" 
                                                required

                                            /> 

                                            Admin

                                            <span></span>

                                        </label>

                                    </div>

                                   
                                </div>


    <div className="col-lg-6 m-form__group-sub">

    <label className="form-control-label">* Branch:</label>

    <input
    type="text"
    name="branch" 
    className="form-control m-input"
    placeholder="Please enter your branch" 
    value={branch}
    onChange={InputEvent}                                    
    required
    />


    </div>


                            </div>



                          </div>

                        </div>

                      </div>

                    </div>

                        
                
                  </div>

                  <div className="m-portlet__foot m-portlet__foot--fit m--margin-top-40">

                    <div className="m-form__actions m-form__actions">

                      <div className="row">

                        <div className="col-lg-2"></div>

                        <div className="col-lg-4 m--align-left">

                          <Link to="/employees" className="btn btn-secondary m-btn m-btn--custom m-btn--icon" data-wizard-action="prev">
                            
                            <span>

                              <i className="la la-arrow-left"></i>&nbsp;&nbsp;

                              <span>Back</span>

                            </span>

                          </Link>

                        </div>

                        <div className="col-lg-4 m--align-right">

                          <button className="btn btn-primary m-btn m-btn--custom m-btn--icon"
                              // data-wizard-action="submit"
                              type='submit'
                          >
                           
                            <span>
                              <i className="la la-check"></i>&nbsp;&nbsp;
                              <span>Submit</span>
                            </span>

                          </button>                         

                        </div>

                        <div className="col-lg-2"></div>

                      </div>

                    </div>
                    
                  </div>
               
                </form>

              </div>
          
            </div>
      
          </div>

        </div>
        
      </div>
        
    </>
  )
}

export default AddEmployee;