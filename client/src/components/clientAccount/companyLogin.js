import React,{useEffect}  from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Form,Button,Row,Col,Spinner } from 'react-bootstrap';
import classes from './login.module.css';
import Olx from '../../assets/robot.png'; 
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Login } from '../../entities/action/companyAction';



const validationSchema=Yup.object().shape({
    email:Yup.string()
    .required("Must Be A User ID"),
    password:Yup.string()
   
    .required("Must Be a Password")
})

const CompanyLogin = (props)=> { 

    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state=>state.companyAccount.isLoggedIn);
    const isLoading = useSelector(state=>state.companyAccount.isLoading);

    useEffect(()=>{
        if(isLoggedIn){
            props.history.push('/admin');
        }
        
    },[isLoggedIn])
  return (
    <>
    <div style={{backgroundColor: 'rgb(0, 19, 38)',minHeight:'100vh'}}>
        <div className={classes.Box} style={{paddingTop:'10%'}}>
            {
                !isLoading?
                <Row>
                <Col xl={6} md={12}>
                    <img src={Olx} alt="LoginPage" style={{margin:'auto'}} className={classes.Img}></img>
                </Col>
                <Col xl={6} md={12} style={{display:'flex',flexDirection:'column',alignSelf:'center'}}>
                    <div style={{marginBottom:'5%'}} className={classes.ReduceSize}>
                        <center>
                            <h2 style={{color:"white"}} >Login to your Dashboad</h2>  
                        </center>  
                    </div>
                    <Formik 
                    initialValues={{ email: '', password: '' }} 
                    validationSchema={validationSchema}
                    onSubmit={
                        (values,{setSubmitting,resetForm})=>{
                            setSubmitting(true);
                            console.log(values)
                            dispatch(Login(values,"1"))
                            resetForm();
                            setSubmitting(false);
                        }
                    }>
                        {({values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting})=>(
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email ID</Form.Label>
                                    <Form.Control
                                    name="email"
                                    type="email" 
                                    placeholder="Enter Email ID"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className={touched.email ? "has-error":null}/> 
                                    <Form.Text className="text-muted">
                                    {errors.email && touched.email && errors.email}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                    name="password"
                                    type="password" 
                                    placeholder="Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className={touched.email && errors.name ? "has-error":null} />
                                    <Form.Text className="text-muted">
                                    {errors.password && touched.password && errors.password}
                                    </Form.Text>
                                </Form.Group>
                                <center>
                                <Button 
                                size="lg" 
                                variant="primary" 
                                type="submit" 
                                style={{margin:'3% 0'}}
                                disabled={isSubmitting}
                                >
                                Login
                                </Button>
                                <Button 
                                size="lg" 
                                variant="danger"  
                                style={{margin:'3% 2%'}}
                                onClick={()=>props.history.push('/employers')}
                                >
                                Cancel
                                </Button>
                                </center>
                            </Form>
                        )}
                    </Formik>       
                </Col>
            </Row>
                :
                <center> 
                    <Spinner animation="border" variant="light" />
                </center>
            }
        </div>
    </div>  
    </> 
      
  );
}

export default CompanyLogin;