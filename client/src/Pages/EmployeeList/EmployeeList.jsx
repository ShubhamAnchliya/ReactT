import React from 'react';
import { Link } from 'react-router-dom';


const EmployeeList = () => {
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

                {/* <!--begin: Datatable --> */}
                <table className="table table-striped- table-bordered table-hover table-checkable" id="m_table_1">
                   
                    <thead>

                        <tr>
                            <th>Record ID</th>
                            <th>Order ID</th>
                            <th>Country</th>
                            <th>Ship City</th>
                            <th>Ship Address</th>
                            <th>Company Agent</th>
                            <th>Company Name</th>
                            <th>Ship Date</th>
                            <th>Status</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>1</td>
                            <td>61715-075</td>
                            <td>China</td>
                            <td>Tieba</td>
                            <td>746 Pine View Junction</td>
                            <td>Nixie Sailor</td>
                            <td>Gleichner, Ziemann and Gutkowski</td>
                            <td>2/12/2018</td>
                            <td>3</td>
                            <td>2</td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>63629-4697</td>
                            <td>Indonesia</td>
                            <td>Cihaur</td>
                            <td>01652 Fulton Trail</td>
                            <td>Emelita Giraldez</td>
                            <td>Rosenbaum-Reichel</td>
                            <td>8/6/2017</td>
                            <td>6</td>
                            <td>3</td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>68084-123</td>
                            <td>Argentina</td>
                            <td>Puerto Iguazú</td>
                            <td>2 Pine View Park</td>
                            <td>Ula Luckin</td>
                            <td>Kulas, Cassin and Batz</td>
                            <td>5/26/2016</td>
                            <td>1</td>
                            <td>2</td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>67457-428</td>
                            <td>Indonesia</td>
                            <td>Talok</td>
                            <td>3050 Buell Terrace</td>
                            <td>Evangeline Cure</td>
                            <td>Pfannerstill-Treutel</td>
                            <td>7/2/2016</td>
                            <td>1</td>
                            <td>3</td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>31722-529</td>
                            <td>Austria</td>
                            <td>Sankt Andrä-Höch</td>
                            <td>3038 Trailsway Junction</td>
                            <td>Tierney St. Louis</td>
                            <td>Dicki-Kling</td>
                            <td>5/20/2017</td>
                            <td>2</td>
                            <td>3</td>
                            <td ></td>
                        </tr>         

                    </tbody>

                </table>

            </div>

        </div>


    </>
  )
}

export default EmployeeList;