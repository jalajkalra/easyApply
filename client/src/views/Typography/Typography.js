import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
 
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import {Form,Col,Button} from  'react-bootstrap'
import { Formik } from "formik";
import {Image, UpdateProfile} from '../../utilities/apiIntegration';
import {DropzoneArea} from 'material-ui-dropzone'


const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function TypographyPage() {
  const [logo,updateLogo] = useState({});
  const [video,updateVideo] = useState({});
  const [images,updateImages] = useState([]);
  const classes = useStyles();
  const handleImages = (inpFile)=>{
    updateImages(inpFile);
  }
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Update Your View Profile</h4>
      </CardHeader>
      <CardBody>
          <Formik
                initialValues={{noOfEmployees:'',locations:'',companyLogo:'',companyKeyWords:'',companyQuotes:'',description:'',workingAtCompany:'',videos:'',images:''}}
                onSubmit={
                  async(values,{setSubmitting,resetForm})=>{
                      setSubmitting(true);
                      const img1 = await Image(logo);
                      const vid1 = await Image(video);
                      let imgArr = [];
                      for(let i=0;i<images.length;i++){
                        let temp = await Image(images[i]);
                        imgArr.push(temp);
                      }
                      const newData = {
                        noOfEmployees:values.noOfEmployees,
                        locations:values.locations,
                        companyLogo:img1,
                        companyKeyWords:values.companyKeyWords,
                        companyQuotes:values.companyQuotes,
                        description:values.description,
                        workingAtCompany:values.workingAtCompany,
                        videos:vid1,
                        images:imgArr
                      }
                      const response = await UpdateProfile(newData);
                      if(response.message=="success"){
                        alert("Successfully Updated Profile");
                        window.location.reload();
                      }
                      resetForm();
                      setSubmitting(false);
                  }
                }
              >
                {({handleBlur,handleChange,handleSubmit,values})=>(
                  <Form onSubmit={handleSubmit}>
                    <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                            <Form.Label>Number Of Employees</Form.Label>
                            <Form.Control 
                                as="select"
                                name="noOfEmployees"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.noOfEmployees}
                                required
                            >
                            <option value="">---select---</option>
                            <option value="0-100">0-100</option>
                            <option value="101-500">101-500</option>
                            <option value="501-1000">501-1000</option>
                            <option value="1001-5000">1001-5000</option>
                            <option value="5000+">5000+</option>
                            </Form.Control>
                        </Form.Group>
                      <Form.Group as={Col} controlId="formBasicLocations">
                        <Form.Label>Locations:</Form.Label>
                        <Form.Control
                          name="locations"
                          type="text" 
                          placeholder="Locations"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.locations}
                          required
                        /> 
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formBasicPrimary">
                        <Form.Label>Company Logo:</Form.Label>
                        <Form.Control
                          name="logo"
                          type="file" 
                          onChange={(e)=>updateLogo(e.target.files[0])}
                          required
                        /> 
                      </Form.Group>
                      <Form.Group as={Col} controlId="formBasicResponsibilities">
                        <Form.Label>Video:</Form.Label>
                        <Form.Control
                          name="video"
                          type="file" 
                          onChange={(e)=>updateVideo(e.target.files[0])}
                          required
                        /> 
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formBasicExperience">
                        <Form.Label>Company Quotes:</Form.Label>
                        <Form.Control
                          name="companyQuotes"
                          type="text" 
                          placeholder="Enter Company Quotes"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.companyQuotes}
                          required
                        /> 
                      </Form.Group>
                      <Form.Group as={Col} controlId="formBasicSecondary">
                        <Form.Label>Keywords:</Form.Label>
                        <Form.Control
                          name="companyKeyWords"
                          type="text" 
                          placeholder="Enter Keywords"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.companyKeyWords}
                          required
                        /> 
                      </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formBasicPackage">
                        <Form.Label>Working At Company:</Form.Label>
                        <Form.Control
                          name="workingAtCompany"
                          type="text" 
                          placeholder="Enter How it's Like Working In The Company.."
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.workingAtCompany}
                          required
                        /> 
                      </Form.Group>
                      <Form.Group controlId="formBasicDescription">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control
                          name="description"
                          type="text" 
                          placeholder="Enter Description"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.description}
                          required
                        /> 
                      </Form.Group>
                      <Form.Group controlId="formBasicPrimary">
                        <Form.Label>Company Images:</Form.Label>
                        <DropzoneArea
                          onChange={handleImages}
                          filesLimit={3}
                        />
                      </Form.Group>
                      <center>
                        <Button color="primary" type="submit">Submit</Button>
                      </center>
                  </Form>
                )}
              </Formik>
      </CardBody>
    </Card>
  );
}
