import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const EmployeeList = () => {

    const [employees, setemployees] = useState([]);
   

    // const navigate = useNavigate();

    // useEffect(() => {
    //     // console.log("Employeelist use_effect");
    //     loadEmployees();
    // }, []);

    // const loadEmployees = async () => {
    //     const result  = await axios.get("http://localhost:5000/api/employee")
    //     console.log("employeelist res.data",result.data);
    //     setEmployees(result.data); 

    //     // const resData = result.json();

    //     // console.log("resData", resData);

    //     // setEmployees(resData);
    // }


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

    <>

        <div className="m-portlet m-portlet--mobile">
            <div className="m-portlet__head">
                <div className="m-portlet__head-caption">
                    <div className="m-portlet__head-title">
                        <h3 className="m-portlet__head-text">
                            Extended Pagination
                        </h3>
                    </div>
                </div>
                <div className="m-portlet__head-tools">
                    <ul className="m-portlet__nav">
                        <li className="m-portlet__nav-item">
                            <Link to="/addemployee" className="btn btn-info m-btn m-btn--custom m-btn--icon m-btn--air">
                                <span>
                                    <i className="la la-plus"></i>
                                    <span>New Record</span>
                                </span>
                            </Link>
                        </li>
                        <li className="m-portlet__nav-item"></li>
                        <li className="m-portlet__nav-item">
                            <div className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover" aria-expanded="true">
                                <a href="#" className="m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle">
                                    <i className="la la-ellipsis-h m--font-brand"></i> 
                                </a>
                                <div className="m-dropdown__wrapper">
                                    <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                                    <div className="m-dropdown__inner">
                                        <div className="m-dropdown__body">
                                            <div className="m-dropdown__content">
                                                <ul className="m-nav">
                                                    <li className="m-nav__section m-nav__section--first">
                                                        <span className="m-nav__section-text">Quick Actions</span>
                                                    </li>
                                                    <li className="m-nav__item">
                                                        <a href="" className="m-nav__link">
                                                            <i className="m-nav__link-icon flaticon-share"></i>
                                                            <span className="m-nav__link-text">Create Post</span>
                                                        </a>
                                                    </li>
                                                    <li className="m-nav__item">
                                                        <a href="" className="m-nav__link">
                                                            <i className="m-nav__link-icon flaticon-chat-1"></i>
                                                            <span className="m-nav__link-text">Send Messages</span>
                                                        </a>
                                                    </li>
                                                    <li className="m-nav__item">
                                                        <a href="" className="m-nav__link">
                                                            <i className="m-nav__link-icon flaticon-multimedia-2"></i>
                                                            <span className="m-nav__link-text">Upload File</span>
                                                        </a>
                                                    </li>
                                                    <li className="m-nav__section">
                                                        <span className="m-nav__section-text">Useful Links</span>
                                                    </li>
                                                    <li className="m-nav__item">
                                                        <a href="" className="m-nav__link">
                                                            <i className="m-nav__link-icon flaticon-info"></i>
                                                            <span className="m-nav__link-text">FAQ</span>
                                                        </a>
                                                    </li>
                                                    <li className="m-nav__item">
                                                        <a href="" className="m-nav__link">
                                                            <i className="m-nav__link-icon flaticon-lifebuoy"></i>
                                                            <span className="m-nav__link-text">Support</span>
                                                        </a>
                                                    </li>
                                                    <li className="m-nav__separator m-nav__separator--fit m--hide">
                                                    </li>
                                                    <li className="m-nav__item m--hide">
                                                        <a href="#" className="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm">Submit</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="m-portlet__body">

                <table className="table table-striped- table-bordered table-hover table-checkable" id="m_table_1">
                   
                    <thead>

                        <tr>
                            <th>Record ID</th>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                            {/* <th>Pincode</th>
                            <th>Role</th>
                            <th>Branch</th> */}
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            employees.map((data , index) => (

                                <tr key={index}>

                                <th  scope="row">{index+1}</th>
                                <td>{data.firstName} {data.lastName}</td>                       
                                <td>{data.email}</td>
                                <td>{data.mobile}</td>
                                <td>{data.addressLine}</td>
                                <td>{data.city}</td>
                                <td>{data.state}</td>              
                                {/* <td>{data.country}</td> */}
                                {/* <td>{data.pincode}</td>   
                                <td>{data.role}</td>   
                                <td>{data.branch}</td>    */}
                                {/* <td>3</td> */}
											{/* <td>2</td> */}
                                <td nowrap></td>

                                </tr>

                            ))
                        }
                        



                    </tbody>

                </table>

            </div>

        </div>


    </>
  )
}

export default EmployeeList;