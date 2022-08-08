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

//                         <input type="text" className="form-control m-input" placeholder="Phone number" />
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

const AddEmployee = () => {
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

           
                <form className="m-form m-form--label-align-left- m-form--state-" id="m_form">

                
                  <div className="m-portlet__body">

                   
                    <div className="m-wizard__form-step m-wizard__form-step--current" id="m_wizard_form_step_1">
                      
                      <div className="row">

                        <div className="col-xl-8 offset-xl-2">

                          <div className="m-form__section m-form__section--first">

                            <div className="m-form__heading">
                              <h3 className="m-form__heading-title">Employee Details</h3>
                            </div>

                            <div className="form-group m-form__group row">
                              <label className="col-xl-3 col-lg-3 col-form-label">*First Name:</label>
                              <div className="col-xl-9 col-lg-9">
                                <input type="text" name="name" className="form-control m-input" placeholder="" value="Nick Stone" />
                                <span className="m-form__help">Please enter your first name</span>
                              </div>
                            </div>

                            <div className="form-group m-form__group row">
                              <label className="col-xl-3 col-lg-3 col-form-label">* Last Name:</label>
                              <div className="col-xl-9 col-lg-9">
                                <input type="text" name="name" className="form-control m-input" placeholder="" value="Nick Stone" />
                                <span className="m-form__help">Please enter your last name</span>
                              </div>
                            </div>

                            <div className="form-group m-form__group row">
                              <label className="col-xl-3 col-lg-3 col-form-label">* Email:</label>
                              <div className="col-xl-9 col-lg-9">
                                <input type="email" name="email" className="form-control m-input" placeholder="" value="nick.stone@gmail.com" />
                                <span className="m-form__help">We'll never share your email with anyone else</span>
                              </div>
                            </div>

                            <div className="form-group m-form__group row">
                              <label className="col-xl-3 col-lg-3 col-form-label">* Phone</label>
                              <div className="col-xl-9 col-lg-9">
                                <div className="input-group">
                                  <div className="input-group-prepend"><span className="input-group-text"><i className="la la-phone"></i></span></div>
                                  <input type="text" name="phone" className="form-control m-input" placeholder="" value="1-541-754-3010" />
                                </div>
                                <span className="m-form__help">Enter your valid phone in US phone format. E.g: 1-541-754-3010</span>
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
                                <input type="text" name="address1" className="form-control m-input" placeholder="" value="Headquarters 1120 N Street Sacramento 916-654-5266" />
                                <span className="m-form__help">Street address, P.O. box, company name, c/o</span>
                              </div>
                            </div>                  

                            <div className="form-group m-form__group row">
                              <label className="col-xl-3 col-lg-3 col-form-label">* City:</label>
                              <div className="col-xl-9 col-lg-9">
                                <input type="text" name="city" className="form-control m-input" placeholder="" value="Polo Alto" />
                              </div>
                            </div>

                            <div className="form-group m-form__group row">
                              <label className="col-xl-3 col-lg-3 col-form-label">* State:</label>
                              <div className="col-xl-9 col-lg-9">
                                <input type="text" name="state" className="form-control m-input" placeholder="" value="California" />
                              </div>
                            </div>

                            <div className="form-group m-form__group row">
                              <label className="col-xl-3 col-lg-3 col-form-label">* Country:</label>
                              <div className="col-xl-9 col-lg-9">
                                <select name="country" className="form-control m-input">
                                  <option value="">Select</option>
                                  <option value="AF">Afghanistan</option>
                                  <option value="AX">Åland Islands</option>
                                  <option value="AL">Albania</option>
                                  <option value="DZ">Algeria</option>
                                  <option value="AS">American Samoa</option>
                                  <option value="AD">Andorra</option>
                                  <option value="AO">Angola</option>
                                  <option value="AI">Anguilla</option>
                                  <option value="AQ">Antarctica</option>
                                  <option value="AG">Antigua and Barbuda</option>
                                  <option value="AR">Argentina</option>
                                  <option value="AM">Armenia</option>
                                  <option value="AW">Aruba</option>
                                  <option value="AU">Australia</option>
                                  <option value="AT">Austria</option>
                                  <option value="AZ">Azerbaijan</option>
                                  <option value="BS">Bahamas</option>
                                  <option value="BH">Bahrain</option>
                                  <option value="BD">Bangladesh</option>
                                  <option value="BB">Barbados</option>
                                  <option value="BY">Belarus</option>
                                  <option value="BE">Belgium</option>
                                  <option value="BZ">Belize</option>
                                  <option value="BJ">Benin</option>
                                  <option value="BM">Bermuda</option>
                                  <option value="BT">Bhutan</option>
                                  <option value="BO">Bolivia, Plurinational State of</option>
                                  <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                  <option value="BA">Bosnia and Herzegovina</option>
                                  <option value="BW">Botswana</option>
                                  <option value="BV">Bouvet Island</option>
                                  <option value="BR">Brazil</option>
                                  <option value="IO">British Indian Ocean Territory</option>
                                  <option value="BN">Brunei Darussalam</option>
                                  <option value="BG">Bulgaria</option>
                                  <option value="BF">Burkina Faso</option>
                                  <option value="BI">Burundi</option>
                                  <option value="KH">Cambodia</option>
                                  <option value="CM">Cameroon</option>
                                  <option value="CA">Canada</option>
                                  <option value="CV">Cape Verde</option>
                                  <option value="KY">Cayman Islands</option>
                                  <option value="CF">Central African Republic</option>
                                  <option value="TD">Chad</option>
                                  <option value="CL">Chile</option>
                                  <option value="CN">China</option>
                                  <option value="CX">Christmas Island</option>
                                  <option value="CC">Cocos (Keeling) Islands</option>
                                  <option value="CO">Colombia</option>
                                  <option value="KM">Comoros</option>
                                  <option value="CG">Congo</option>
                                  <option value="CD">Congo, the Democratic Republic of the</option>
                                  <option value="CK">Cook Islands</option>
                                  <option value="CR">Costa Rica</option>
                                  <option value="CI">Côte d'Ivoire</option>
                                  <option value="HR">Croatia</option>
                                  <option value="CU">Cuba</option>
                                  <option value="CW">Curaçao</option>
                                  <option value="CY">Cyprus</option>
                                  <option value="CZ">Czech Republic</option>
                                  <option value="DK">Denmark</option>
                                  <option value="DJ">Djibouti</option>
                                  <option value="DM">Dominica</option>
                                  <option value="DO">Dominican Republic</option>
                                  <option value="EC">Ecuador</option>
                                  <option value="EG">Egypt</option>
                                  <option value="SV">El Salvador</option>
                                  <option value="GQ">Equatorial Guinea</option>
                                  <option value="ER">Eritrea</option>
                                  <option value="EE">Estonia</option>
                                  <option value="ET">Ethiopia</option>
                                  <option value="FK">Falkland Islands (Malvinas)</option>
                                  <option value="FO">Faroe Islands</option>
                                  <option value="FJ">Fiji</option>
                                  <option value="FI">Finland</option>
                                  <option value="FR">France</option>
                                  <option value="GF">French Guiana</option>
                                  <option value="PF">French Polynesia</option>
                                  <option value="TF">French Southern Territories</option>
                                  <option value="GA">Gabon</option>
                                  <option value="GM">Gambia</option>
                                  <option value="GE">Georgia</option>
                                  <option value="DE">Germany</option>
                                  <option value="GH">Ghana</option>
                                  <option value="GI">Gibraltar</option>
                                  <option value="GR">Greece</option>
                                  <option value="GL">Greenland</option>
                                  <option value="GD">Grenada</option>
                                  <option value="GP">Guadeloupe</option>
                                  <option value="GU">Guam</option>
                                  <option value="GT">Guatemala</option>
                                  <option value="GG">Guernsey</option>
                                  <option value="GN">Guinea</option>
                                  <option value="GW">Guinea-Bissau</option>
                                  <option value="GY">Guyana</option>
                                  <option value="HT">Haiti</option>
                                  <option value="HM">Heard Island and McDonald Islands</option>
                                  <option value="VA">Holy See (Vatican City State)</option>
                                  <option value="HN">Honduras</option>
                                  <option value="HK">Hong Kong</option>
                                  <option value="HU">Hungary</option>
                                  <option value="IS">Iceland</option>
                                  <option value="IN">India</option>
                                  <option value="ID">Indonesia</option>
                                  <option value="IR">Iran, Islamic Republic of</option>
                                  <option value="IQ">Iraq</option>
                                  <option value="IE">Ireland</option>
                                  <option value="IM">Isle of Man</option>
                                  <option value="IL">Israel</option>
                                  <option value="IT">Italy</option>
                                  <option value="JM">Jamaica</option>
                                  <option value="JP">Japan</option>
                                  <option value="JE">Jersey</option>
                                  <option value="JO">Jordan</option>
                                  <option value="KZ">Kazakhstan</option>
                                  <option value="KE">Kenya</option>
                                  <option value="KI">Kiribati</option>
                                  <option value="KP">Korea, Democratic People's Republic of</option>
                                  <option value="KR">Korea, Republic of</option>
                                  <option value="KW">Kuwait</option>
                                  <option value="KG">Kyrgyzstan</option>
                                  <option value="LA">Lao People's Democratic Republic</option>
                                  <option value="LV">Latvia</option>
                                  <option value="LB">Lebanon</option>
                                  <option value="LS">Lesotho</option>
                                  <option value="LR">Liberia</option>
                                  <option value="LY">Libya</option>
                                  <option value="LI">Liechtenstein</option>
                                  <option value="LT">Lithuania</option>
                                  <option value="LU">Luxembourg</option>
                                  <option value="MO">Macao</option>
                                  <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                  <option value="MG">Madagascar</option>
                                  <option value="MW">Malawi</option>
                                  <option value="MY">Malaysia</option>
                                  <option value="MV">Maldives</option>
                                  <option value="ML">Mali</option>
                                  <option value="MT">Malta</option>
                                  <option value="MH">Marshall Islands</option>
                                  <option value="MQ">Martinique</option>
                                  <option value="MR">Mauritania</option>
                                  <option value="MU">Mauritius</option>
                                  <option value="YT">Mayotte</option>
                                  <option value="MX">Mexico</option>
                                  <option value="FM">Micronesia, Federated States of</option>
                                  <option value="MD">Moldova, Republic of</option>
                                  <option value="MC">Monaco</option>
                                  <option value="MN">Mongolia</option>
                                  <option value="ME">Montenegro</option>
                                  <option value="MS">Montserrat</option>
                                  <option value="MA">Morocco</option>
                                  <option value="MZ">Mozambique</option>
                                  <option value="MM">Myanmar</option>
                                  <option value="NA">Namibia</option>
                                  <option value="NR">Nauru</option>
                                  <option value="NP">Nepal</option>
                                  <option value="NL">Netherlands</option>
                                  <option value="NC">New Caledonia</option>
                                  <option value="NZ">New Zealand</option>
                                  <option value="NI">Nicaragua</option>
                                  <option value="NE">Niger</option>
                                  <option value="NG">Nigeria</option>
                                  <option value="NU">Niue</option>
                                  <option value="NF">Norfolk Island</option>
                                  <option value="MP">Northern Mariana Islands</option>
                                  <option value="NO">Norway</option>
                                  <option value="OM">Oman</option>
                                  <option value="PK">Pakistan</option>
                                  <option value="PW">Palau</option>
                                  <option value="PS">Palestinian Territory, Occupied</option>
                                  <option value="PA">Panama</option>
                                  <option value="PG">Papua New Guinea</option>
                                  <option value="PY">Paraguay</option>
                                  <option value="PE">Peru</option>
                                  <option value="PH">Philippines</option>
                                  <option value="PN">Pitcairn</option>
                                  <option value="PL">Poland</option>
                                  <option value="PT">Portugal</option>
                                  <option value="PR">Puerto Rico</option>
                                  <option value="QA">Qatar</option>
                                  <option value="RE">Réunion</option>
                                  <option value="RO">Romania</option>
                                  <option value="RU">Russian Federation</option>
                                  <option value="RW">Rwanda</option>
                                  <option value="BL">Saint Barthélemy</option>
                                  <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                  <option value="KN">Saint Kitts and Nevis</option>
                                  <option value="LC">Saint Lucia</option>
                                  <option value="MF">Saint Martin (French part)</option>
                                  <option value="PM">Saint Pierre and Miquelon</option>
                                  <option value="VC">Saint Vincent and the Grenadines</option>
                                  <option value="WS">Samoa</option>
                                  <option value="SM">San Marino</option>
                                  <option value="ST">Sao Tome and Principe</option>
                                  <option value="SA">Saudi Arabia</option>
                                  <option value="SN">Senegal</option>
                                  <option value="RS">Serbia</option>
                                  <option value="SC">Seychelles</option>
                                  <option value="SL">Sierra Leone</option>
                                  <option value="SG">Singapore</option>
                                  <option value="SX">Sint Maarten (Dutch part)</option>
                                  <option value="SK">Slovakia</option>
                                  <option value="SI">Slovenia</option>
                                  <option value="SB">Solomon Islands</option>
                                  <option value="SO">Somalia</option>
                                  <option value="ZA">South Africa</option>
                                  <option value="GS">South Georgia and the South Sandwich Islands</option>
                                  <option value="SS">South Sudan</option>
                                  <option value="ES">Spain</option>
                                  <option value="LK">Sri Lanka</option>
                                  <option value="SD">Sudan</option>
                                  <option value="SR">Suriname</option>
                                  <option value="SJ">Svalbard and Jan Mayen</option>
                                  <option value="SZ">Swaziland</option>
                                  <option value="SE">Sweden</option>
                                  <option value="CH">Switzerland</option>
                                  <option value="SY">Syrian Arab Republic</option>
                                  <option value="TW">Taiwan, Province of China</option>
                                  <option value="TJ">Tajikistan</option>
                                  <option value="TZ">Tanzania, United Republic of</option>
                                  <option value="TH">Thailand</option>
                                  <option value="TL">Timor-Leste</option>
                                  <option value="TG">Togo</option>
                                  <option value="TK">Tokelau</option>
                                  <option value="TO">Tonga</option>
                                  <option value="TT">Trinidad and Tobago</option>
                                  <option value="TN">Tunisia</option>
                                  <option value="TR">Turkey</option>
                                  <option value="TM">Turkmenistan</option>
                                  <option value="TC">Turks and Caicos Islands</option>
                                  <option value="TV">Tuvalu</option>
                                  <option value="UG">Uganda</option>
                                  <option value="UA">Ukraine</option>
                                  <option value="AE">United Arab Emirates</option>
                                  <option value="GB">United Kingdom</option>
                                  <option value="US" selected>United States</option>
                                  <option value="UM">United States Minor Outlying Islands</option>
                                  <option value="UY">Uruguay</option>
                                  <option value="UZ">Uzbekistan</option>
                                  <option value="VU">Vanuatu</option>
                                  <option value="VE">Venezuela, Bolivarian Republic of</option>
                                  <option value="VN">Viet Nam</option>
                                  <option value="VG">Virgin Islands, British</option>
                                  <option value="VI">Virgin Islands, U.S.</option>
                                  <option value="WF">Wallis and Futuna</option>
                                  <option value="EH">Western Sahara</option>
                                  <option value="YE">Yemen</option>
                                  <option value="ZM">Zambia</option>
                                  <option value="ZW">Zimbabwe</option>
                                </select>
                              </div>
                            </div>

                            <div className="form-group m-form__group row">
                                <label className="col-xl-3 col-lg-3 col-form-label">* ZIP:</label>
                                <div className="col-xl-9 col-lg-9">
                                  <input type="text" className="form-control m-input" name="" placeholder="" value="34890" />
                                </div>
                            </div>

                          </div>

                          <div className="m-separator m-separator--dashed m-separator--lg"></div>


                          <div class="m-form__section">

																<div class="m-form__heading">
																	<h3 class="m-form__heading-title">Other Details</h3>
																</div>

																<div class="form-group m-form__group row">

																	<div class="col-lg-6 m-form__group-sub">

																		<label class="form-control-label"> Employee Role:</label>

																		<div class="m-radio-inline">

																			<label class="m-radio m-radio--solid m-radio--brand">
																				<input type="radio" name="account_group" value="2" /> Employee
																				<span></span>
																			</label>

																			<label class="m-radio m-radio--solid m-radio--brand">
																				<input type="radio" name="account_group" value="2" /> Admin
																				<span></span>
																			</label>

																		</div>

																		{/* <span class="m-form__help">Please select user group</span> */}
																	</div>


                                  <div class="col-lg-6 m-form__group-sub">
																		<label class="form-control-label">Branch:</label>
																		<input type="text" name="account_password" class="form-control m-input" placeholder="" value="" />
																		{/* <span class="m-form__help">Please enter your branch</span> */}
																	</div>


																</div>

                                
                                <div class="form-group m-form__group row">
                                  <label class="col-form-label col-lg-3 col-sm-12">Date of Birth: </label>
                                  <div class="col-lg-9 col-md-9 col-sm-12">
                                    <div class="input-group date">
                                      <input type="text" class="form-control m-input" readonly placeholder="Select date" id="m_datepicker_2_modal" />
                                      <div class="input-group-append">
                                        <span class="input-group-text">
                                          <i class="la la-calendar-check-o"></i>
                                        </span>
                                      </div>
                                    </div>
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

                          <button className="btn btn-secondary m-btn m-btn--custom m-btn--icon" data-wizard-action="prev">
                            <span>
                              <i className="la la-arrow-left"></i>&nbsp;&nbsp;
                              <span>Back</span>
                            </span>
                          </button>

                        </div>

                        <div className="col-lg-4 m--align-right">

                          <button className="btn btn-primary m-btn m-btn--custom m-btn--icon" data-wizard-action="submit">
                           
                            <span>
                              <i className="la la-check"></i>&nbsp;&nbsp;
                              <span>Submit</span>
                            </span>

                          </button>

                          {/* <button className="btn btn-warning m-btn m-btn--custom m-btn--icon" data-wizard-action="next">
                           
                            <span>

                              <span>Save & Continue</span>&nbsp;&nbsp;
                              <i className="la la-arrow-right"></i>
                            </span>

                          </button> */}

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