import React, { useEffect, useState } from 'react';
import classes from './viewjob.module.css';
import ClientNav from '../Navbars/clientSideNavbar/navbar';
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import { GetJobById,GetLatestJobs } from '../../utilities/apiIntegration';
import Jobforms from '../jobform/jobforms';

const Companyabouts = (props)=>{
    const [data,updateData] = useState({});
    const [jobs,updateJobs] = useState([]);
    useEffect(()=>{
        (async()=>{
            const res = await GetJobById({id:props.match.params.id});
            if(res.message==="success"){
                updateData(res.user);
            }
            const response = await GetLatestJobs();
            if(response.message==="success"){
                updateJobs(response.user);
            }
        })()
    },[])
    return(
        <>
        <ClientNav />
        <Container style={{minHeight:'75vh',height:'100%'}}>
            <Row className={classes.Background}>
                {
                    Object.keys(data).length>0?
                    <>
                        <Col md={6} xs={12}>
                            <div className={classes.Centered}>
                                <h5 className={classes.P}>Job Position : {data.jobPosition}</h5>
                                <p>Location : {data.location}</p>
                                <h5 className={classes.P}>Primary Skills:</h5>
                                <p>{data.primarySkills}</p>
                                <h5 className={classes.P}>Secondary Skills:</h5>
                                <p>{data.secondarySkills}</p>
                                <h5 className={classes.P}>Experience:</h5>
                                <p>{data.experience}</p>
                                <h5 className={classes.P}>Expected Salary:</h5>
                                <p>{data.expectedSalary} LPA</p>
                                <h5 className={classes.P}>Responsibilities:</h5>
                                <p>{data.responsibilities}</p>
                                <div>
                                    <h5 className={classes.P}>Job Description</h5>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} xs={12} style={{height:'100%',display:'flex',alignSelf:'center',flexDirection:'column'}}>
                            <Jobforms id={data._id}/>
                        </Col>
                    </>:null
                }
            </Row>

            <div className="my-5">
                <h2 className="text-center font-weight-lighter">Similar Jobs</h2>
            </div>
            <Container>
            <Row>
                {
                    jobs.length>0?jobs.map((job,key)=>
                    <Col lg={4} sm={6} xs={12} key={key}>
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
                                    <Button variant="success">Apply</Button>
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
        </Container>
        <Footer />
        </>
    )
}
export default Companyabouts;