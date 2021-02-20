import React from 'react';
import ClientNav from '../Navbars/clientSideNavbar/navbar';
// import EmployersCarousel from '../carousel/employersCarousel';
import classes from './company.module.css';
import Footer from '../footer/footer';
import body1 from '../../assets/body1.jpg';
import body2 from '../../assets/body2.jpg';
import body4 from '../../assets/body4.jpg';

import { Form, Col, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const company = () => {
    return (
        <>
            <ClientNav />
            {/* <EmployersCarousel/> */}
            <center>
                <h3 className={classes.H3}>
                    EXPLORE COMPANIES
                </h3>
                <h3 className={classes.p3}>
                    Browse Offices Before You Apply
                </h3>
            </center>
            <div className={classes.Form}>
               
                <div className="my-5">
                <h4 className={classes.H4}>THE EASSYAPPLY TEAM PICKS</h4>
                </div>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img src={body1} class="card-img-top" alt='image' />
                                        <div class="card-body">
                                            <h5 class="card-title">UBER</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <NavLink to="/companyabouts" class="btn btn-primary">EXPLORE</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img src={body2} class="card-img-top" alt='' />
                                        <div class="card-body">
                                            <h5 class="card-title">RAZORPAY</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">EXPLORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img src={body4} class="card-img-top" alt='' />
                                        <div class="card-body">
                                            <h5 class="card-title">CRED</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">EXPLORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="my-5">
                <h4 className={classes.H4}>FAST GROWING COMPANIES</h4>
                </div>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img src={body1}class="card-img-top" alt='' />
                                        <div class="card-body">
                                            <h5 class="card-title">POSTMAN</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">EXPLORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img src={body2} class="card-img-top" alt='' />
                                        <div class="card-body">
                                            <h5 class="card-title">ZOMATO</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">EXPLORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img src={body4} class="card-img-top" alt='' />
                                        <div class="card-body">
                                            <h5 class="card-title">SPRINKLR</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">EXPLORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="my-5">
                <h4 className={classes.H4}>INNOVATIVE COMPANIES</h4>
                </div>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img src={body1} class="card-img-top" alt='' />
                                        <div class="card-body">
                                            <h5 class="card-title">TESLA</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">EXPLORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img src={body2} class="card-img-top" alt='' />
                                        <div class="card-body">
                                            <h5 class="card-title">SPACEX</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">EXPLORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img src={body4}class="card-img-top" alt='' />
                                        <div class="card-body">
                                            <h5 class="card-title">IBM</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">EXPLORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="my-5">
                <h4 className={classes.H4}>NEWEST THIS MONTH</h4>
                </div>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img src={body1} class="card-img-top" alt=''/>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">EXPLORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img src={body2} class="card-img-top" alt='' />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">EXPLORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img src={body4} class="card-img-top" alt='' />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">EXPLORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto mt-5">
                                    <div class="card">
                                        <img src={body1} class="card-img-top" alt='' />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">EXPLORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto mt-5">
                                    <div class="card">
                                        <img src={body2} class="card-img-top" alt='' />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">EXPLORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto mt-5">
                                    <div class="card">
                                        <img src={body4} class="card-img-top" alt='' />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">EXPLORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default company;