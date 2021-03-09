import React,{useState,useEffect} from 'react';
import classes from './companyabouts.module.css';
import ClientNav from '../Navbars/clientSideNavbar/navbar';
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import { GetCompaniesById, GetLatestJobs } from '../../utilities/apiIntegration';

const Companyabouts = (props)=>{
    const [jobs,updateJobs] = useState([]);
    const [data,updateData] = useState({});
    useEffect(()=>{
        (async()=>{
            const res = await GetCompaniesById(props.match.params.id);
            if(res.message==="success"&&res.companies!==undefined&&Object.keys(res.companies).length>0){
                updateData(res.companies);
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
        {
            Object.keys(data).length>0?
        
        <Container>
            <Row className={classes.Background}>
                <Col>
                    <img src={data.images[0]} alt="Office" className={classes.Img}/>
                </Col>
                <Col>
                    <div className={classes.Centered}>
                        <h5 className={classes.P}>{data.companyName}</h5>
                        <p>
                            {data.description}
                        </p>
                    </div>
                </Col>
            </Row>

            <Row className={classes.Background}>
                <Col md={8} xs={12}>
                    <div className={classes.Centered}>
                        <h5 className={classes.P}>Multiple Locations</h5>
                        <Container fluid>
                            <Row>
                                {
                                    data.locations&&data.locations.map((d,i)=>
                                        <p key={i}>{d}</p>
                                    )
                                }
                                <Col xs={6}></Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col md={4} xs={12}>
                    <img src={data.images[1]} alt="Office" className={classes.Img}/>
                </Col>
            </Row>
            <h3>Working At company</h3>
            <p>{data.companyQuotes}</p>
            <video width="320" height="240" controls>
                <source src={data.videos} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
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
                    ):<div style={{minHeight:'75vh'}}></div>
                }
            </Row>
        </Container>
        </Container>:null
    }
        <Footer />
        </>
    )
}
export default Companyabouts;