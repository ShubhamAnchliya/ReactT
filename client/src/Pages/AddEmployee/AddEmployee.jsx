// import React from 'react';
// import "./AddEmployee.css";

// const AddEmployee = () => {
//   return (
//     <>

//           <div className="col-lg-6">

         
//             <div className="m-portlet">

//               <div className="m-portlet__head">
//                 <div className="m-portlet__head-caption">
//                   <div className="m-portlet__head-title">
//                     <span className="m-portlet__head-icon m--hide">
//                       <i className="la la-gear"></i>
//                     </span>
//                     <h3 className="m-portlet__head-text">
//                       Employee Details Form
//                     </h3>
//                   </div>
//                 </div>
//               </div>

             
//               <form className="m-form m-form--fit">

//                 <div className="m-portlet__body">

//                   <div className="m-form__section m-form__section--first">

//                     <div className="m-form__heading">
//                       <h3 className="m-form__heading-title">Add Employee Details:</h3>
//                     </div>

//                     <div className="form-group m-form__group">
//                       <label htmlFor="example_input_full_name">First Name:</label>
//                       <input type="text" className="form-control m-input" placeholder="Enter first name" />
//                       {/* <span className="m-form__help">Please enter your full name</span> */}
//                     </div>

//                     <div className="form-group m-form__group">
//                       <label htmlFor="example_input_full_name">Last Name:</label>
//                       <input type="text" className="form-control m-input" placeholder="Enter last name" />
//                       {/* <span className="m-form__help">Please enter your full name</span> */}
//                     </div>

//                     <div className="form-group m-form__group">
//                       <label>Email address:</label>
//                       <input type="email" className="form-control m-input" placeholder="Enter email" />
//                       {/* <span className="m-form__help">We'll never share your email with anyone else</span> */}
//                     </div>

//                     <div className="form-group m-form__group">
//                       <label>Contact:</label>
//                       <div className="m-input-icon m-input-icon--left">

//                         <inputtype="text" className="form-control m-input" placeholder="Phone number" />
//                         <span className="m-input-icon__icon m-input-icon__icon--left"><span><i className="la la-bell"></i></span></span>
                      
//                       </div>
//                       {/* <span className="m-form__help">We'll never share your email with anyone else</span> */}
//                     </div>

//                     <div className="m-form__group form-group">

// 													<label for="">Role:</label>

// 													<div className="m-checkbox-list">

// 														<label className="m-checkbox">
// 															<input type="checkbox" /> Employee            
// 															<span></span> 
// 														</label>

//                             <label className="m-checkbox">
// 															<input type="checkbox" /> Admin
                              
// 															<span></span> 
// 														</label>

// 													</div>
//                     </div>

                    

              

//                   </div>

                 

//                 </div>

//                 <div className="m-portlet__foot m-portlet__no-border m-portlet__foot--fit">

//                   <div className="m-form__actions m-form__actions--solid">
//                     <button type="reset" className="btn btn-success">Submit</button>
//                     <button type="reset" className="btn btn-secondary">Cancel</button>
//                   </div>

//                 </div>

//               </form>

//             </div>

       
//           </div>

        
//     </>
//   )
// }

// export default AddEmployee;









import React from 'react';
import "./AddEmployee.css";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

const AddEmployee = () => {

  // const navigate = useNavigate();

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

 
  const formSubmit =  (e) => {
    e.preventDefault();

    console.log("employee", employee);

    axios
    .post("http://localhost:5000/api/employee/add", employee)
    .then((res) => {     

      console.log(res.data.message);
      // setEmployee({ ...employee: "" });

      
    })
    .catch((err) => {
      console.log("Error couldn't add employee");
      console.log(err.message);
    });

       // navigate("/employeelist");

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
                    Employee Registration
                    {/* <small>form wizard example</small> */}
                  </h3>
                </div>
              </div>
            
            </div>
            {/* m-wizard m-wizard--1 m-wizard--success m-wizard--step-last */}
         
            <div className="m-wizard  m-wizard--step-last" id="m_wizard">
     
              <div className="m-wizard__form">

           
                <form className="m-form m-form--label-align-left- m-form--state-" id="m_form" onSubmit={formSubmit} >

                
                  <div className="m-portlet__body">
                   
                    <div className="m-wizard__form-step m-wizard__form-step--current" id="m_wizard_form_step_1">
                      
                      <div className="row">

                        <div className="col-xl-8 offset-xl-2">

                          <div className="m-form__section m-form__section--first">

                            <div className="m-form__heading">
                              <h3 className="m-form__heading-title">Employee Details</h3>
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

                                {/* <span className="m-form__help">Please enter your first name</span> */}

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
                                {/* <span className="m-form__help">Please enter your last name</span> */}

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
                                {/* <span className="m-form__help">We'll never share your email with anyone else</span> */}
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
                                {/* <span className="m-form__help">Enter your valid mobile in US mobile format. E.g: 1-541-754-3010</span> */}
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
                                {/* <span className="m-form__help">Street address, P.O. box, company name, c/o</span> */}
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
                                    type="text"
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
                                          // isSelected={role === "Employee"}
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
                                          id="admin"
                                          // type="radio" 
                                          // name="admin" 
                                          // id="2"
                                          // isSelected={role === "Admin"}
                                          // value="Admin"
                                          onChange={InputEvent}   
                                          // value="2" 
                                          required

                                        /> 
                                        
                                        Admin

																				<span></span>

																			</label>

																		</div>

																		{/* <span className="m-form__help">Please select user group</span> */}
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

																		{/* <span className="m-form__help">Please enter your branch</span> */}

																	</div>


																</div>

{/*                                 
                                <div className="form-group m-form__group row">

                                  <label className="col-form-label col-lg-3 col-sm-12">* Date of Birth: </label>
                                 
                                  <div className="col-lg-9 col-md-9 col-sm-12">

                                    <div className="input-group date">
                                                                                              
                                      <input
                                        type="text"
                                        className="form-control m-input"
                                        name="dob"
                                        // readOnly="readonly"
                                        placeholder="Select date" 
                                        selected={dob}
                                        value={dob}
                                      //  selected = {dob}
                                        // value={new(Date)}
                                        onChange={InputEvent}
                                        id="m_datepicker_2_modal"
                                        required
                                      />

                                      <div className="input-group-append">

                                        <span className="input-group-text">

                                          <i className="la la-calendar-check-o"></i>

                                        </span>

                                      </div>

                                    </div>

                                  </div>

                                </div> */}

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

                          <Link to="/employeelist" className="btn btn-secondary m-btn m-btn--custom m-btn--icon" data-wizard-action="prev">
                            
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