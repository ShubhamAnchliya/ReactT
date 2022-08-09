import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>

        <div id="m_aside_left" className="m-grid__item	m-aside-left  m-aside-left--skin-dark ">

        {/* <!-- BEGIN: Aside Menu --> */}
        <div id="m_ver_menu" className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " m-menu-vertical="1" m-menu-scrollable="1" m-menu-dropdown-timeout="500" style={{position: 'relative'}}>
            <ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">

                <li className="m-menu__item  m-menu__item--active" aria-haspopup="true">
                    <Link to="/" className="m-menu__link ">
                        <i className="m-menu__link-icon flaticon-line-graph"></i>
                        <span className="m-menu__link-title"> <span className="m-menu__link-wrap"> <span className="m-menu__link-text">Dashboard</span>
                            <span className="m-menu__link-badge"><span className="m-badge m-badge--danger">2</span></span> </span>
                        </span>
                    </Link>
                </li>

                <li className="m-menu__item  m-menu__item--active" aria-haspopup="true">
                    <Link to="/about" className="m-menu__link ">
                        <i className="m-menu__link-icon flaticon-line-graph"></i>
                        <span className="m-menu__link-title">
                            <span className="m-menu__link-wrap"> 
                                <span className="m-menu__link-text">About</span>
                            </span>
                        </span>
                    </Link>
                </li>


                <li className="m-menu__item  m-menu__item--active" aria-haspopup="true">
                    <Link to="/employees/addemployee" className="m-menu__link ">
                        <i className="m-menu__link-icon flaticon-line-graph"></i>
                        <span className="m-menu__link-title">
                            <span className="m-menu__link-wrap"> 
                                <span className="m-menu__link-text">Add Employee </span>
                            </span>
                        </span>
                    </Link>
                </li>


                <li className="m-menu__item  m-menu__item--active" aria-haspopup="true">
                    <Link to="/employees" className="m-menu__link ">
                        <i className="m-menu__link-icon flaticon-line-graph"></i>
                        <span className="m-menu__link-title">
                            <span className="m-menu__link-wrap"> 
                                <span className="m-menu__link-text">Employee List</span>
                            </span>
                        </span>
                    </Link>
                </li>

               

                <li className="m-menu__section ">
                    <h4 className="m-menu__section-text">Components</h4>
                    <i className="m-menu__section-icon flaticon-more-v2"></i>
                </li>

                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-layers"></i><span className="m-menu__link-text">Base</span><i
                        className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">Base</span></span></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/state.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">State Colors</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/typography.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Typography</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/stack.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Stack</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/tables.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Tables</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/progress.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Progress</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/modal.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Modal</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/alerts.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Alerts</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/popover.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Popover</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/tooltip.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Tooltip</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/blockui.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Block UI</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/spinners.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Spinners</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/scrollable.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Scrollable</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/dropdown.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Dropdown</span></a></li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">Tabs</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="components/base/tabs/bootstrap.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Bootstrap Tabs</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="components/base/tabs/line.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Line Tabs</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/accordions.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Accordions</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/navs.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Navs</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/lists.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Lists</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/treeview.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Tree View</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/bootstrap-notify.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Bootstrap Notify</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/toastr.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Toastr</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/base/sweetalert2.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">SweetAlert2</span></a></li>
                        </ul>
                    </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-share"></i><span className="m-menu__link-text">Icons</span><i
                        className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/icons/flaticon.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Flaticon</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/icons/fontawesome5.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Fontawesome 5</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/icons/lineawesome.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Lineawesome</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/icons/socicons.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Socicons</span></a></li>
                        </ul>
                    </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-web"></i><span className="m-menu__link-text">Buttons</span><i
                        className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">Buttons</span></span></li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">Button Base</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="components/buttons/base/default.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Default Style</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="components/buttons/base/square.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Square Style</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="components/buttons/base/pill.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Pill Style</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="components/buttons/base/air.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Air Style</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/buttons/group.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Button Group</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/buttons/dropdown.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Button Dropdown</span></a></li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">Button Icon</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="components/buttons/icon/lineawesome.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Lineawesome
                                                    Icons</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="components/buttons/icon/fontawesome.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Fontawesome
                                                    Icons</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="components/buttons/icon/flaticon.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Flaticon Icons</span></a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-interface-1"></i><span className="m-menu__link-text">Portlets</span><i
                        className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">Portlets</span></span></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/portlets/base.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Base Portlets</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/portlets/advanced.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Advanced Portlets</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/portlets/creative.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Creative Portlets</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/portlets/tabbed.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Tabbed Portlets</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/portlets/draggable.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Draggable Portlets</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/portlets/tools.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Portlet Tools</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/portlets/sticky-head.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Sticky Head</span></a></li>
                        </ul>
                    </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-interface-6"></i><span className="m-menu__link-text">Timeline</span><i
                        className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">Timeline</span></span></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/timeline/timeline-1.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Timeline 1</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/timeline/timeline-2.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Timeline 2</span></a></li>
                        </ul>
                    </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-network"></i><span className="m-menu__link-text">Widgets</span><i
                        className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">Widgets</span></span></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/widgets/general.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">General Widgets</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/widgets/chart.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Chart Widgets</span></a></li>
                        </ul>
                    </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-calendar"></i><span className="m-menu__link-text">Calendar</span><i
                        className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">Calendar</span></span></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/calendar/basic.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Basic Calendar</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/calendar/list-view.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">List Views</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/calendar/google.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Google Calendar</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/calendar/external-events.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">External
                                        Events</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/calendar/background-events.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Background
                                        Events</span></a></li>
                        </ul>
                    </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-diagram"></i><span className="m-menu__link-text">Charts</span><i
                        className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">Charts</span></span></li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">amCharts</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="components/charts/amcharts/charts.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">amCharts
                                                    Charts</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="components/charts/amcharts/stock-charts.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">amCharts
                                                    Stock Charts</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="components/charts/amcharts/maps.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">amCharts Maps</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/charts/flotcharts.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Flot Charts</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/charts/google-charts.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Google Charts</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/charts/morris-charts.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Morris Charts</span></a></li>
                        </ul>
                    </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-placeholder-1"></i><span className="m-menu__link-text">Maps</span><i
                        className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">Maps</span></span></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/maps/google-maps.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Google Maps</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/maps/jqvmap.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">JQVMap</span></a></li>
                        </ul>
                    </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-signs-2"></i><span className="m-menu__link-text">Utils</span><i
                        className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">Utils</span></span></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/utils/session-timeout.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Session Timeout</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="components/utils/idle-timer.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Idle Timer</span></a></li>
                        </ul>
                    </div>
                </li>
                <li className="m-menu__section ">
                    <h4 className="m-menu__section-text">CRUD</h4>
                    <i className="m-menu__section-icon flaticon-more-v2"></i>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-interface-7"></i><span className="m-menu__link-text">Forms
                            & Controls</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">Forms & Controls</span></span></li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">Form Controls</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/controls/base.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Base Inputs</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/controls/checkbox-radio.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Checkbox &
                                                    Radio</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/controls/input-group.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Input Groups</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/controls/switch.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Switch</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/controls/option.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Mega Options</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">Form Widgets</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/bootstrap-datepicker.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Datepicker</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/bootstrap-datetimepicker.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Datetimepicker</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/bootstrap-timepicker.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Timepicker</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/bootstrap-daterangepicker.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Daterangepicker</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/bootstrap-touchspin.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Touchspin</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/bootstrap-maxlength.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Maxlength</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/bootstrap-switch.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Switch</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/bootstrap-multipleselectsplitter.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Multiple
                                                    Select Splitter</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/bootstrap-select.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Bootstrap
                                                    Select</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/select2.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Select2</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/typeahead.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Typeahead</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/nouislider.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">noUiSlider</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/form-repeater.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Form Repeater</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/ion-range-slider.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Ion Range
                                                    Slider</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/input-mask.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Input Masks</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/summernote.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Summernote
                                                    WYSIWYG</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/bootstrap-markdown.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Markdown
                                                    Editor</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/autosize.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Autosize</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/clipboard.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Clipboard</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/dropzone.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Dropzone</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/widgets/recaptcha.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Google reCaptcha</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">Form Layouts</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/layouts/default-forms.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Default Forms</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/layouts/multi-column-forms.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Multi
                                                    Column Forms</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/layouts/action-bars.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Basic Action
                                                    Bars</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/layouts/sticky-action-bar.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Sticky
                                                    Action Bar</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">Form Validation</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/validation/states.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Validation States</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/validation/form-controls.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Form
                                                    Controls</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/forms/validation/form-widgets.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Form Widgets</span></a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-interface-8"></i><span className="m-menu__link-text">Metronic
                            Wizard</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true"><a href="crud/wizard/wizard-1.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Form Wizard 1</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="crud/wizard/wizard-2.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Form Wizard 2</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="crud/wizard/wizard-3.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Form Wizard 3</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="crud/wizard/wizard-4.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Form Wizard 4</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="crud/wizard/wizard-5.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Form Wizard 5</span></a></li>
                        </ul>
                    </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-tabs"></i><span className="m-menu__link-text">Metronic
                            Datatable</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">Metronic Datatable</span></span></li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">Base</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/base/data-local.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Local
                                                    Data</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/base/data-json.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">JSON
                                                    Data</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/base/data-ajax.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Ajax
                                                    Data</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/base/html-table.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">HTML
                                                    Table</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/base/record-selection.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Record
                                                    Selection</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/base/local-sort.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Local
                                                    Sort</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/base/row-details.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Row
                                                    Details</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/base/column-rendering.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Column
                                                    Rendering</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/base/column-width.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Column
                                                    Width</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/base/responsive-columns.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Responsive
                                                    Columns</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/base/translation.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Translation</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">Scrolling</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/scrolling/vertical.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Vertical
                                                    Scrolling</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/scrolling/horizontal.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Horizontal
                                                    Scrolling</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/scrolling/both.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Both
                                                    Scrolling</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">Locked Columns</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/locked/left.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Left Locked
                                                    Columns</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/locked/right.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Right
                                                    Locked Columns</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/locked/both.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Both Locked
                                                    Columns</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/locked/html-table.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">HTML
                                                    Table</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">Child Datatables</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/child/data-local.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Local
                                                    Data</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/child/data-ajax.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Remote
                                                    Data</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">API</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/api/methods.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">API Methods</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/metronic-datatable/api/events.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Events</span></a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-list-3"></i><span className="m-menu__link-text">DataTables</span><i
                        className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">DataTables</span></span></li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">Basic</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/basic/basic.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Basic Tables</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/basic/scrollable.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Scrollable
                                                    Tables</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/basic/headers.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Complex Headers</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/basic/paginations.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Pagination
                                                    Options</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">Advanced</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/advanced/column-rendering.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Column
                                                    Rendering</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/advanced/multiple-controls.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Multiple
                                                    Controls</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/advanced/column-visibility.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Column
                                                    Visibility</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/advanced/row-callback.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Row
                                                    Callback</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/advanced/row-grouping.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Row
                                                    Grouping</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/advanced/footer-callback.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Footer
                                                    Callback</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">Data sources</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/data-sources/html.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">HTML</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/data-sources/javascript.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Javascript</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/data-sources/ajax-client-side.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Ajax
                                                    Client-side</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/data-sources/ajax-server-side.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Ajax
                                                    Server-side</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">Search Options</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/search-options/column-search.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Column
                                                    Search</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/search-options/advanced-search.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Advanced
                                                    Search</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">Extensions</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/extensions/buttons.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Buttons</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/extensions/colreorder.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">ColReorder</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/extensions/keytable.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">KeyTable</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/extensions/responsive.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Responsive</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/extensions/rowgroup.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">RowGroup</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/extensions/rowreorder.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">RowReorder</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/extensions/scroller.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Scroller</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a href="crud/datatables/extensions/select.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Select</span></a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="m-menu__section ">
                    <h4 className="m-menu__section-text">Snippets</h4>
                    <i className="m-menu__section-icon flaticon-more-v2"></i>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-interface-9"></i><span className="m-menu__link-text">Pricing
                            Tables</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">Pricing Tables</span></span></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="snippets/general/pricing-tables/pricing-table-1.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Pricing
                                        Tables v1</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="snippets/general/pricing-tables/pricing-table-2.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Pricing
                                        Tables v2</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="snippets/general/pricing-tables/pricing-table-3.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Pricing
                                        Tables v3</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="snippets/general/pricing-tables/pricing-table-4.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Pricing
                                        Tables v4</span></a></li>
                        </ul>
                    </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-piggy-bank"></i><span className="m-menu__link-text">Invoices</span><i
                        className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">Invoices</span></span></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="snippets/invoices/invoice-1.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Invoice v1</span></a></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="snippets/invoices/invoice-2.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Invoice v2</span></a></li>
                        </ul>
                    </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-exclamation"></i><span className="m-menu__link-text">FAQS</span><i
                        className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">FAQS</span></span></li>
                            <li className="m-menu__item " aria-haspopup="true"><a href="snippets/faq/faq-1.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">FAQ v1</span></a></li>
                        </ul>
                    </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-suitcase"></i><span className="m-menu__link-text">Custom
                            Pages</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                    <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                        <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">Custom Pages</span></span></li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">User Pages</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a target="_blank" href="snippets/pages/user/login-1.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Login
                                                    - 1</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a target="_blank" href="snippets/pages/user/login-2.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Login
                                                    - 2</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a target="_blank" href="snippets/pages/user/login-3.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Login
                                                    - 3</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a target="_blank" href="snippets/pages/user/login-4.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Login
                                                    - 4</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a target="_blank" href="snippets/pages/user/login-5.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Login
                                                    - 5</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a target="_blank" href="snippets/pages/user/login-6.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Login
                                                    - 6</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
                                    className="m-menu__link-text">Error Pages</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true"><a target="_blank" href="snippets/pages/errors/error-1.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Error
                                                    1</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a target="_blank" href="snippets/pages/errors/error-2.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Error
                                                    2</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a target="_blank" href="snippets/pages/errors/error-3.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Error
                                                    3</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a target="_blank" href="snippets/pages/errors/error-4.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Error
                                                    4</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a target="_blank" href="snippets/pages/errors/error-5.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Error
                                                    5</span></a></li>
                                        <li className="m-menu__item " aria-haspopup="true"><a target="_blank" href="snippets/pages/errors/error-6.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Error
                                                    6</span></a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>

        {/* <!-- END: Aside Menu --> */}
        </div>
        
    </>
  )
}

export default Sidebar;