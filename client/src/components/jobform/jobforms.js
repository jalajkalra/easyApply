import React,{useState} from 'react';
import classes from './jobforms.module.css';
import { Form,Col,Container,Button } from 'react-bootstrap';
import { Image,CheckIfApplied,ApplyForCompany } from '../../utilities/apiIntegration';

const Jobforms = (props)=>{
    const [file,updateFile] = useState({});
    const [fullName,updateFullName] = useState('');
    const [experience,updateExperience] = useState('');
    const [email,updateEmail] = useState('');
    const [phone,updatePhone] = useState('');
    const handleApply = async()=>{
        const response = await CheckIfApplied(props.id);
        if(response.message==="success"){
            const img = await Image(file);
            const newData = {
                jobId:props.id,
                studentName:fullName,
                workExperience:experience,
                email:email,
                phone:phone,
                resume:img
            }
            const res = await ApplyForCompany(newData);
            if(res){
                alert("Successfully Applied");
                window.location.href="/job";
            }
        }else{
            alert(response.message);
        }
    }
    return(
        <>
            <center style={{background:'whitesmoke',width:'100%'}}>
                <h3 className={classes.H3}>
                   Eassy Apply Here
                </h3>
            </center>
            <div className={classes.Form}>
                <Container> 
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirst">
                            <Form.Label className={classes.resume}>Upload Resume</Form.Label>
                            <Form.Control type="file" onChange={(e)=>updateFile(e.target.files[0])}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="formBasicCompany">
                            <Form.Label>Your Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Full Name" name="name" onChange={(e)=>updateFullName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Work Experience(yr)</Form.Label>
                            <Form.Control 
                                as="select"
                                name="experience"
                                onChange={(e)=>updateExperience(e.target.value)}
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
                            <Form.Control type="email" name="email" placeholder="Enter Email" onChange={(e)=>updateEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" name="phone" placeholder="Enter Phone Number" onChange={(e)=>updatePhone(e.target.value)}/>
                        </Form.Group>
                        <center>
                            <Button variant="light" size="lg" onClick={handleApply}>APPLY</Button>
                        </center>
                    </Form>
                </Container>
            </div>
        </>
    )
}
export default Jobforms;