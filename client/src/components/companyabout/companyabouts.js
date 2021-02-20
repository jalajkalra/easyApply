import React from 'react';
import classes from './companyabouts.module.css';
import ClientNav from '../Navbars/clientSideNavbar/navbar';
import {Container,Row,Col} from 'react-bootstrap';
import Footer from '../footer/footer';
import uber from '../../assets/uber.jpg';
import ubergallery from '../../assets/ubergallery.jpg';
import { NavLink } from 'react-router-dom';

const companyabouts = ()=>{
    return(
        <>
        <ClientNav />
        <Container>
            <Row className={classes.Background}>
                <Col>
                    <img src={uber} alt="Office" className={classes.Img}/>
                </Col>
                <Col>
                    <div className={classes.Centered}>
                        <h5 className={classes.P}>UBER</h5>
                        <p>
                        Uber Technologies, Inc., commonly known as Uber, is an American technology company. Its services include ride-hailing, food delivery, package delivery, couriers, freight transportation, and, through a partnership with Lime, electric bicycle and motorized scooter rental.
                        </p>
                    </div>
                </Col>
            </Row>

            <Row className={classes.Background}>
                <Col>
                    <div className={classes.Centered}>
                        <h5 className={classes.P}>Multiple Locations</h5>
                        <p>India</p>
                        <p>Australia</p>
                        <p>Argentina</p>
                        <p>Bangladesh</p>
                        <p>Canada</p>
                    </div>
                </Col>
                <Col>
                    <div className={classes.Centered}>
                        <h5 className={classes.P}></h5>
                        <p>Colombia</p>
                        <p>France</p>
                        <p>Germany</p>
                        <p>Italy</p>
                        <p>Japan</p>
                    </div>
                </Col>
                <Col>
                    <img src={ubergallery} alt="Office" className={classes.Img}/>
                </Col>
            </Row>

            <div className="my-5">
            <h2 className="text-center font-weight-lighter">Featured Jobs</h2>
            </div>
            <div className="container-fluid mb-5">
            <div className="row">
            <div className="col-10 mx-auto">
                <div className="row">
                
                <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                <div class="card-header font-weight-normal">
                Uber
                 </div>
            <div class="card-body">
                <h5 class="card-title">UI/UX Developer</h5>
            <p class="card-text">Banglore , Karnataka</p>
            <NavLink to="/jobforms" class="btn btn-outline-success">Apply</NavLink> 
            <a href="#" class="btn btn-primary ml-2">View</a>
                </div>
            </div>
                </div>
                <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                <div class="card-header font-weight-normal">
                Uber
                 </div>
            <div class="card-body">
                <h5 class="card-title">SDE-2</h5>
            <p class="card-text">Noida , UttarPradesh</p>
            <NavLink to="/jobforms" class="btn btn-outline-success">Apply</NavLink> 
            <a href="#" class="btn btn-primary ml-2">View</a>
                </div>
            </div>
                </div>
                <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                <div class="card-header font-weight-normal">
                Uber
                 </div>
            <div class="card-body">
                <h5 class="card-title">SDE-Intern</h5>
            <p class="card-text">Hyderabad , Telengana</p>
            <NavLink to="/jobforms" class="btn btn-outline-success">Apply</NavLink> 
            <a href="#" class="btn btn-primary ml-2">View</a>
                </div>
            </div>
                </div>
                </div>
                </div>
                </div>
                </div>
        </Container>
        <Footer />
        </>
    )
}
export default companyabouts;