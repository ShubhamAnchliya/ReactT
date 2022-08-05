import React from 'react'
// import Footer from '../../Components/Footer/Footer';
import "./Home.css";

const Home = () => {
  return (
    <> 

      <div>

        <h1>Home</h1>

        <div className="row">
							<div className="col-xl-4">

								{/* <!--begin:: Widgets/Top Products--> */}
								<div className="m-portlet m-portlet--bordered-semi m-portlet--full-height ">
									<div className="m-portlet__head">
										<div className="m-portlet__head-caption">
											<div className="m-portlet__head-title">
												<h3 className="m-portlet__head-text">
													Trends
												</h3>
											</div>
										</div>
										<div className="m-portlet__head-tools">
											<ul className="m-portlet__nav">
												<li className="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover" aria-expanded="true">
													<a href="#" className="m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand">
														All
													</a>
													<div className="m-dropdown__wrapper">
														<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" style={{left: 'auto', right: '36.5px'}}></span>
														<div className="m-dropdown__inner">
															<div className="m-dropdown__body">
																<div className="m-dropdown__content">
																	<ul className="m-nav">
																		<li className="m-nav__item">
																			<a href="" className="m-nav__link">
																				<i className="m-nav__link-icon flaticon-share"></i>
																				<span className="m-nav__link-text">Activity</span>
																			</a>
																		</li>
																		<li className="m-nav__item">
																			<a href="" className="m-nav__link">
																				<i className="m-nav__link-icon flaticon-chat-1"></i>
																				<span className="m-nav__link-text">Messages</span>
																			</a>
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
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
									<div className="m-portlet__body">

										{/* <!--begin::Widget5--> */}
										<div className="m-widget4">
											<div className="m-widget4__chart m-portlet-fit--sides m--margin-top-10 m--margin-top-20" style={{height:"260px"}}>
												<canvas id="m_chart_trends_stats"></canvas>
											</div>
											<div className="m-widget4__item">
												<div className="m-widget4__img m-widget4__img--logo">
													<img src="assets/app/media/img/client-logos/logo3.png" alt="" />
												</div>
												<div className="m-widget4__info">
													<span className="m-widget4__title">
														Phyton
													</span><br/>
													<span className="m-widget4__sub">
														A Programming Language
													</span>
												</div>
												<span className="m-widget4__ext">
													<span className="m-widget4__number m--font-danger">+$17</span>
												</span>
											</div>
											<div className="m-widget4__item">
												<div className="m-widget4__img m-widget4__img--logo">
													<img src="assets/app/media/img/client-logos/logo1.png" alt="" />
												</div>
												<div className="m-widget4__info">
													<span className="m-widget4__title">
														FlyThemes
													</span><br/>
													<span className="m-widget4__sub">
														A Let's Fly Fast Again Language
													</span>
												</div>
												<span className="m-widget4__ext">
													<span className="m-widget4__number m--font-danger">+$300</span>
												</span>
											</div>
											<div className="m-widget4__item">
												<div className="m-widget4__img m-widget4__img--logo">
													<img src="assets/app/media/img/client-logos/logo2.png" alt="" />
												</div>
												<div className="m-widget4__info">
													<span className="m-widget4__title">
														AirApp
													</span><br/>
													<span className="m-widget4__sub">
														Awesome App For Project Management
													</span>
												</div>
												<span className="m-widget4__ext">
													<span className="m-widget4__number m--font-danger">+$6700</span>
												</span>
											</div>
										</div>

										{/* <!--end::Widget 5-/-> */}
									</div>
								</div>

								{/* <!--end:: Widgets/Top Products--> */}
							</div>
							<div className="col-xl-4">

								{/* <!--begin:: Widgets/Activity--> */}
								<div className="m-portlet m-portlet--bordered-semi m-portlet--widget-fit m-portlet--full-height m-portlet--skin-light  m-portlet--rounded-force">
									<div className="m-portlet__head">
										<div className="m-portlet__head-caption">
											<div className="m-portlet__head-title">
												<h3 className="m-portlet__head-text m--font-light">
													Activity
												</h3>
											</div>
										</div>
										<div className="m-portlet__head-tools">
											<ul className="m-portlet__nav">
												<li className="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover">
													<a href="#" className="m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl">
														<i className="fa fa-genderless m--font-light"></i>
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
																				<span className="m-nav__link-text">Activity</span>
																			</a>
																		</li>
																		<li className="m-nav__item">
																			<a href="" className="m-nav__link">
																				<i className="m-nav__link-icon flaticon-chat-1"></i>
																				<span className="m-nav__link-text">Messages</span>
																			</a>
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
																		<li className="m-nav__separator m-nav__separator--fit">
																		</li>
																		<li className="m-nav__item">
																			<a href="#" className="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm">Cancel</a>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
									<div className="m-portlet__body">
										<div className="m-widget17">
											<div className="m-widget17__visual m-widget17__visual--chart m-portlet-fit--top m-portlet-fit--sides m--bg-danger">
												<div className="m-widget17__chart" style={{height:'320px'}}>
													<canvas id="m_chart_activities"></canvas>
												</div>
											</div>
											<div className="m-widget17__stats">
												<div className="m-widget17__items m-widget17__items-col1">
													<div className="m-widget17__item">
														<span className="m-widget17__icon">
															<i className="flaticon-truck m--font-brand"></i>
														</span>
														<span className="m-widget17__subtitle">
															Delivered
														</span>
														<span className="m-widget17__desc">
															15 New Paskages
														</span>
													</div>
													<div className="m-widget17__item">
														<span className="m-widget17__icon">
															<i className="flaticon-paper-plane m--font-info"></i>
														</span>
														<span className="m-widget17__subtitle">
															Reporeted
														</span>
														<span className="m-widget17__desc">
															72 Support Cases
														</span>
													</div>
												</div>
												<div className="m-widget17__items m-widget17__items-col2">
													<div className="m-widget17__item">
														<span className="m-widget17__icon">
															<i className="flaticon-pie-chart m--font-success"></i>
														</span>
														<span className="m-widget17__subtitle">
															Ordered
														</span>
														<span className="m-widget17__desc">
															72 New Items
														</span>
													</div>
													<div className="m-widget17__item">
														<span className="m-widget17__icon">
															<i className="flaticon-time m--font-danger"></i>
														</span>
														<span className="m-widget17__subtitle">
															Arrived
														</span>
														<span className="m-widget17__desc">
															34 Upgraded Boxes
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* <!--end:: Widgets/Activity--> */}
							</div>
							<div className="col-xl-4">

								{/* <!--begin:: Widgets/Blog--> */}
								<div className="m-portlet m-portlet--bordered-semi m-portlet--full-height  m-portlet--rounded-force">
									<div className="m-portlet__head m-portlet__head--fit">
										<div className="m-portlet__head-caption">
											<div className="m-portlet__head-action">
												<button type="button" className="btn btn-sm m-btn--pill  btn-brand">Blog</button>
											</div>
										</div>
									</div>
									<div className="m-portlet__body">
										<div className="m-widget19">
											<div className="m-widget19__pic m-portlet-fit--top m-portlet-fit--sides" style={{minHeight: '286px'}}>
												<img src="assets/app/media/img//blog/blog1.jpg" alt="" />
												<h3 className="m-widget19__title m--font-light">
													Introducing New Feature
												</h3>
												<div className="m-widget19__shadow"></div>
											</div>
											<div className="m-widget19__content">
												<div className="m-widget19__header">
													<div className="m-widget19__user-img">
														<img className="m-widget19__img" src="assets/app/media/img//users/user1.jpg" alt="" />
													</div>
													<div className="m-widget19__info">
														<span className="m-widget19__username">
															Anna Krox
														</span><br/>
														<span className="m-widget19__time">
															UX/UI Designer, Google
														</span>
													</div>
													<div className="m-widget19__stats">
														<span className="m-widget19__number m--font-brand">
															18
														</span>
														<span className="m-widget19__comment">
															Comments
														</span>
													</div>
												</div>
												<div className="m-widget19__body">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text of the printing and typesetting industry scrambled a type specimen book text of the dummy text of the printing printing and typesetting
													industry scrambled dummy text of the printing.
												</div>
											</div>
											<div className="m-widget19__action">
												<button type="button" className="btn m-btn--pill btn-secondary m-btn m-btn--hover-brand m-btn--custom">Read More</button>
											</div>
										</div>
									</div>
								</div>

								{/* <!--end:: Widgets/Blog--> */}
							</div>
						</div>

      </div>

    </>
  )
}

export default Home;