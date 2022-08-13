import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import Swal from 'sweetalert2'; 
import "./AddUser.css";
import defaultImage from "../../assets/image/uploadimage.jpg";

const AddUser = () => {



    const navigate = useNavigate();

    const [user, setUser] = useState({
  
      firstName : "",
      email : "",
      mobile : "",
      profilePic: defaultImage
  
    });

    // const [file, setFile] = useState(
    //     defaultImage);
  
    const {
      firstName,
      email,
      mobile,
      profilePic
    
       
    } = user;
  
    const InputEvent = async (e) => {
      setUser({
        ...user, [e.target.name]: e.target.value
      })
      // console.log("e.target.value", e.target.value);
    };
  
  
    // const handlePhoto = (e) => {
    //   setUser({...user, profilePic: e.target.files[0]});
    // };





        const handlePhoto = (e) => {

            if(e.target.files && e.target.files[0]) {
                setUser({...user, profilePic: URL.createObjectURL(e.target.files[0])});
            }
            else{
                setUser({...user, profilePic: defaultImage});
            }




           
          };

















    // const handlePhoto = (e) => {
    //   setUser({...user, profilePic: URL.createObjectURL(e.target.files[0])});
    // };

    // const handlePhoto = (e) => {
    //     console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));
    // }

    const formSubmit =  (e) => {

      e.preventDefault();
  
      console.log("user", user);
  
    //   axios
    //   .post("http://localhost:5000/api/user/add", user)
    //   .then((res) => {     
  
    //     console.log("resDataMessage",res.data.message);
  
    //     setUser('');
  
    //     Swal.fire({
    //       position: 'center',
    //       icon: 'success',
    //       title: 'Employee record has been saved',
    //       showConfirmButton: false,
    //       timer: 1000
    //     })
        
    //   })

    //   .catch((err) => {
    //     console.log("Error couldn't add user");
    //     console.log(err.message);
    //   });
  
        // navigate("/user");
  
    };
  

  return (

    <>

        <section id="addUser" className="addUser">

            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2 className='text-center mt-4'>Add User Detail</h2>
                </div>

                <div className="row ">

                    <form className="addUser-form mt-4" 
                    onSubmit={formSubmit}
                    >

                        <div className="form-group col-md">

                            <label htmlFor="firstName">First Name</label>

                            <input 
                                type="text" 
                                name="firstName" 
                                className="form-control" 
                                id="firstName" 
                                placeholder="Enter First Name"               
                                value={firstName}
                                onChange={InputEvent}
                                required 
                            />

                        </div>                        

                        <div className="form-group ">

                            <label htmlFor="email">Email</label>
                            
                            <input 
                                type="email" 
                                className="form-control" 
                                name="email" 
                                id="email" 
                                placeholder="Enter Email" 
                                value={email}
                                onChange={InputEvent}
                                required 
                            />
                        </div>                     

                        <div className="form-group ">

                            <label htmlFor="mobile">Mobile Number</label>

                            <input 
                                type="mobile" 
                                name="mobile" 
                                className="form-control" 
                                id="mobile" 
                                placeholder="Enter Contact Number"               
                                value={mobile}
                                onChange={InputEvent}
                                required 
                            />

                        </div>


                        <div className="form-group ">

                            <label htmlFor="profilePic"> Profile Pic</label>
          
                            <div className="profile-image mb-3">
                                <img 
                                    
                                    // src={file} 

                                    src={profilePic} 
                                    
                                    alt="profilePic" 
                                    
                                    width="120"
                                    height="120" 
                                    className="img" 
                                    
                                />
                            </div>

                            <input 
                                type="file" 
                                name="profilePic" 
                                accept=".png, .jpg, .jpeg"
                                className="form-control" 
                                id="profilePic" 
                                // value={profilePic}
                                onChange={handlePhoto}   
                                                                                               
                                // required 
                                
                            />

                        </div>
                    
                        <div className="text-center buttons">

                            <button className='btn btn-primary mx-1' type="submit">Submit</button>
                            <Link to={'/user'} className='btn btn-danger' >Cancel </Link>

                        </div>

                    </form>

                </div>

            </div>

        </section>                             

    </>

  )

}


export default AddUser;








