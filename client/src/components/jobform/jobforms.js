import React from 'react';
import ClientEmployerNav from '../Navbars/clientEmployerNav/clientEmployerNav';
import EmployersCarousel from '../carousel/employersCarousel';
import classes from './jobforms.module.css';
import Footer from '../footer/footer';
import { Form,Col,Container,Button } from 'react-bootstrap';

const jobforms = ()=>{
    return(
        <>
            <ClientEmployerNav/>
            <center style={{background:'whitesmoke'}}>
                <h3 className={classes.H3}>
                   Eassy Apply 
                </h3>
            </center>
            <div className={classes.Form}>
                <Container> 
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirst">
                            <Form.Label className={classes.resume}>Upload Resume</Form.Label>
                            <Form.Control type="file" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="formBasicCompany">
                            <Form.Label>Your Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Full Name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Work Experience</Form.Label>
                            <Form.Control 
                                as="select"
                            >
                            <option value="">---select---</option>
                            <option value="0">Fresher</option>
                            <option value="101">0-1</option>
                            <option value="501">1-2</option>
                            <option value="1001">2-3</option>
                            <option value="5000+">3-4</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone Number" />
                        </Form.Group>
                        <center>
                            <Button variant="light" size="lg">SUBMIT</Button>
                        </center>
                    </Form>
                </Container>
            </div>
            <Footer/>
        </>
    )
}
export default jobforms;