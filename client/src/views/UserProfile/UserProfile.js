import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import { Formik } from "formik";
import { Form,Col } from "react-bootstrap";
import {PostJob} from '../../utilities/apiIntegration';


const styles = {
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

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Post a job</h4>
              <p className={classes.cardCategoryWhite}>Job Requirement Details</p>
            </CardHeader>
            <CardBody>
              <Formik
                initialValues={{position:'',primary:'',secondary:'',experience:'',responsibilities:'',package:'',locations:'',description:''}}
                onSubmit={
                  async(values,{setSubmitting,resetForm})=>{
                      setSubmitting(true);
                      const newData = {
                        jobPosition:values.position,
                        primarySkills:values.primary,
                        secondarySkills:values.secondary,
                        experience:values.experience,
                        responsibilities:values.responsibilities,
                        description:values.description,
                        expectedSalary:values.package,
                        location:values.locations
                      }
                      const response = await PostJob(newData);
                      if(response.message=="success"){
                        alert("Successfully Posted Job");
                      }
                      resetForm();
                      setSubmitting(false);
                  }
                }
              >
                {({handleBlur,handleChange,handleSubmit,values})=>(
                  <Form onSubmit={handleSubmit}>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formBasicPosition">
                        <Form.Label>Job Position:</Form.Label>
                        <Form.Control
                          name="position"
                          type="text" 
                          placeholder="Enter Job Position"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.position}
                          required
                        /> 
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
                        <Form.Label>Primary Skills:</Form.Label>
                        <Form.Control
                          name="primary"
                          type="text" 
                          placeholder="Enter Primary Skills"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.primary}
                          required
                        /> 
                      </Form.Group>
                      <Form.Group as={Col} controlId="formBasicSecondary">
                        <Form.Label>Secondary Skills:</Form.Label>
                        <Form.Control
                          name="secondary"
                          type="text" 
                          placeholder="Enter Secondary Skills"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.secondary}
                          required
                        /> 
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formBasicExperience">
                        <Form.Label>Experience Required:</Form.Label>
                        <Form.Control
                          name="experience"
                          type="text" 
                          placeholder="(0-1 year)"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.experience}
                          required
                        /> 
                      </Form.Group>
                      <Form.Group as={Col} controlId="formBasicPackage">
                        <Form.Label>Expected Package(LPA):</Form.Label>
                        <Form.Control
                          name="package"
                          type="number" 
                          placeholder="Enter"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.package}
                          required
                        /> 
                      </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formBasicResponsibilities">
                        <Form.Label>Responsibilities:</Form.Label>
                        <Form.Control
                          name="responsibilities"
                          type="text" 
                          placeholder="Enter Responsibilities"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.responsibilities}
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
                      <center>
                        <Button color="primary" type="submit">Submit</Button>
                      </center>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
