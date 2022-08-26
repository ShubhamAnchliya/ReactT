import React from "react";
import "./UploadImg.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UploadImg = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    profilePic: "",
  });

  const { firstName, lastName, email, mobile, profilePic } = user;

  const InputEvent = async (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    // console.log("e.target.value", e.target.value);
  };

  const handlePhoto = (e) => {
    setUser({ ...user, profilePic: e.target.files[0] });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    console.log("user", user);

    axios
      .post("http://localhost:5000/api/user/add", user)
      .then((res) => {
        console.log("resDataMessage", res.data.message);

        // setUser({ ...user: "" });

        setUser("");

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Employee record has been saved",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((err) => {
        console.log("Error couldn't add user");
        console.log(err.message);
      });

    navigate("/employees/viewimg");
  };

  return (
    <>
      <div className="row">
        <div className="col-xl-9">
          <div className="m-portlet">
            <div className="m-portlet__head">
              <div className="m-portlet__head-caption">
                <div className="m-portlet__head-title">
                  <h3 className="m-portlet__head-text">User Registration</h3>
                </div>
              </div>
            </div>

            <div className="m-wizard  m-wizard--step-last" id="m_wizard">
              <div className="m-wizard__form">
                <form
                  className="m-form m-form--label-align-left- m-form--state-"
                  id="m_form"
                  onSubmit={formSubmit}
                  encType="multipart/form-data"
                >
                  <div className="m-portlet__body">
                    <div
                      className="m-wizard__form-step m-wizard__form-step--current"
                      id="m_wizard_form_step_1"
                    >
                      <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                          <div className="m-form__section m-form__section--first">
                            <div className="m-form__heading">
                              <h3 className="m-form__heading-title">
                                User Details
                              </h3>
                            </div>

                            <div className="form-group m-form__group row">
                              <label className="col-xl-3 col-lg-3 col-form-label">
                                * First Name:
                              </label>

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
                              <label className="col-xl-3 col-lg-3 col-form-label">
                                * Last Name:
                              </label>

                              <div className="col-xl-9 col-lg-9">
                                <input
                                  type="text"
                                  name="lastName"
                                  className="form-control m-input"
                                  placeholder="Please enter your last name"
                                  value={lastName}
                                  onChange={InputEvent}
                                  required
                                />
                                {/* <span className="m-form__help">Please enter your last name</span> */}
                              </div>
                            </div>

                            <div className="form-group m-form__group row">
                              <label className="col-xl-3 col-lg-3 col-form-label">
                                * Email:
                              </label>

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
                              <label
                                htmlFor="mobile"
                                className="col-xl-3 col-lg-3 col-form-label"
                              >
                                * Phone
                              </label>

                              <div className="col-xl-9 col-lg-9">
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text">
                                      <i className="la la-mobile"></i>
                                    </span>
                                  </div>
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

                            <div className="form-group m-form__group row">
                              <label
                                htmlFor="profilePic"
                                className="col-xl-3 col-lg-3 col-form-label"
                              >
                                * Image
                              </label>

                              <div className="col-xl-9 col-lg-9">
                                <div className="input-group">
                                  <div className="input-group-prepend"></div>

                                  <input
                                    type="file"
                                    // name="profilePic"
                                    accept=".png, .jpg, .jpeg"
                                    className="form-control m-input"
                                    value={profilePic}
                                    name="photo"
                                    onChange={handlePhoto}
                                    // onChange={InputEvent}
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="m-form__actions m-form__actions">
                    <div className="row">
                      <div className="col-lg-2"></div>

                      <div className="col-lg-4 m--align-left">
                        <Link
                          to="/employees/viewimg"
                          className="btn btn-secondary m-btn m-btn--custom m-btn--icon"
                          data-wizard-action="prev"
                        >
                          <span>
                            <i className="la la-arrow-left"></i>&nbsp;&nbsp;
                            <span>Back</span>
                          </span>
                        </Link>
                      </div>

                      <div className="col-lg-4 m--align-right">
                        <button
                          className="btn btn-primary m-btn m-btn--custom m-btn--icon"
                          // data-wizard-action="submit"
                          type="submit"
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadImg;
