import React, { useEffect,useState } from 'react';
import ClientNav from '../Navbars/clientSideNavbar/navbar';
import Footer from '../footer/footer';
import Classes from './jobs.module.css';
import {Button,Card,Container,Form, Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {GetJobs} from '../../utilities/apiIntegration';

const Job = ()=>{
    const [jobs,updateJobs] = useState([]);
    useEffect(()=>{
        (async()=>{
            const res = await GetJobs();
            if(res.message==="success"){
                updateJobs(res.user);
            }
        })()
    },[])
    return(
        <>
        <ClientNav />
            <div>
            <div className={Classes.BackDrop}></div>
                <Container className={Classes.Centered}>
                    <Form.Control 
                        size="lg" 
                        type="text" 
                        placeholder="Find a career in.." 
                        style={{border:'none',borderRadius:'0',borderRight:'0.5px solid #ddd'}}
                    />
                    <Form.Control 
                        size="lg" 
                        type="text" 
                        placeholder="Near me" 
                        style={{border:'none',borderRadius:'0'}}
                    />
                    <Button className={Classes.btn} >Search</Button>
                </Container>
        </div>
        
        <hr />
        
        <div className="my-5">
            <h2 className="text-center font-weight-lighter">Showing All Job Results</h2>
        </div>
        <Container style={{minHeight:'100vh',height:'100%'}}>
            <Row>
                {
                    jobs.length>0?jobs.map((job,key)=>
                    <Col lg={4} sm={6} xs={12} key={key} style={{marginBottom:'15px'}}>
                        <Card
                            text="dark"
                        >
                            <Card.Header>Company: {job.companyName}</Card.Header>
                            <Card.Body>
                                <Card.Title>{job.jobPosition}</Card.Title>
                                <Card.Text>Locations: {job.location}</Card.Text>
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    <Link to={`job/${job._id}`}>
                                        <Button variant="secondary" style={{marginRight:'5px'}}>Info</Button>
                                    </Link>
                                    <Link to={`job/${job._id}`}>
                                        <Button variant="success">Apply</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Text>Posted On: {job.jobDate}</Card.Text>
                            </Card.Footer>
                        </Card>
                    </Col>
                    ):null
                }
            </Row>
        </Container>

           
        <Footer />
        </>
    )
}
export default Job;