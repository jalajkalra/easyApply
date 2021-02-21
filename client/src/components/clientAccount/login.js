import React,{useEffect}  from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Form,Button,Row,Col,Spinner } from 'react-bootstrap';
import classes from './login.module.css';
import Olx from '../../assets/robot.png'; 
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Login } from '../../entities/action/action';
import ClientLoginNav from '../Navbars/clientLoginNav/navbar';
import { Link } from 'react-router-dom';



const validationSchema=Yup.object().shape({
    email:Yup.string()
    .required("Must Be A User ID"),
    password:Yup.string()
   
    .required("Must Be a Password")
})

const ClientLogin = (props)=> { 

    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state=>state.account.isLoggedIn);
    const isLoading = useSelector(state=>state.account.isLoading);


    useEffect(()=>{
        if(isLoggedIn){
            props.history.push('/');
        }
        
    },[isLoggedIn])
  return (
    <>
    <div style={{backgroundColor: 'rgb(0, 19, 38)',minHeight:'100vh'}}>
        <ClientLoginNav/>
        {
            !isLoading?
            <div className={classes.Box}>
            <Row>
                <Col xl={6} md={12}>
                    <img src={Olx} alt="LoginPage" style={{margin:'auto'}} className={classes.Img}></img>
                </Col>
                <Col xl={6} md={12} style={{display:'flex',flexDirection:'column',alignSelf:'center'}}>
                    <div style={{marginBottom:'5%'}} className={classes.ReduceSize}>
                        <center>
                            <h2 style={{color:"white"}} >Login to your EasyApply Account</h2>  
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
                                onClick={()=>props.history.push('/')}
                                >
                                Cancel
                                </Button>
                                </center>
                                <center>
                                    <Link to="/registration">Not Yet Registered? Register here!!</Link>
                                </center>
                            </Form>
                        )}
                    </Formik>       
                </Col>
            </Row>
        </div>:
        <center> 
            <Spinner animation="border" variant="light" />
        </center>
        }
    </div>  
    </> 
      
  );
}

export default ClientLogin;