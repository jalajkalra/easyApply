import React, { useEffect,useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import { GetJobById, GetJobsPosted } from "../../utilities/apiIntegration.js";
import {Button,NavDropdown} from 'react-bootstrap';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [data,updateData] = useState([]);
  const [dataSet,updateDataSet] = useState([]);
  const [active,updateActive] = useState('1');
  useEffect(()=>{
    (async()=>{
      const response = await GetJobsPosted()
      if(response.message==="success"&&response.data!=undefined&&response.data.length>0){
        let temp = [];
        for(let i = 0;i<response.data.length;i++){
          let t = [];
          t[0] = i+1;
          t[1] = response.data[i];
          t[2] = <Button onClick={()=>handleMoreInfo(response.data[i])}>More Info</Button>
          temp.push(t);
        }
        updateData(temp);
      }
    })()
  },[])

  const handleMoreInfo = async(id)=>{
    updateActive("2");
    const res = await GetJobById({id});
    if(res.message==="success"&&res.user.studentsApplied!==undefined&&res.user!==undefined){
      let temp = [];
      for(let i = 0;i<res.user.studentsApplied.length;i++){
        let t = [];
        t[0] = i+1;
        t[1] = res.user.studentsApplied[i].studentId;
        t[2] = res.user.studentsApplied[i].studentName;
        t[3] = res.user.studentsApplied[i].email;
        t[4] = res.user.studentsApplied[i].phone;
        t[5] = `${res.user.studentsApplied[i].workExperience} year`;
        t[6] = res.user.studentsApplied[i].status;
        t[7] = <Button variant="warning">Open</Button>
        t[8] =  <NavDropdown title="Select" id="basic-nav-dropdown"> 
                  <div style={{display:'flex',flexDirection:'column'}}>
                    <Button variant="warning" style={{marginBottom:'15px'}}>Under Review</Button>
                    <Button variant="success" style={{marginBottom:'15px'}}>Hired</Button>
                    <Button variant="danger">Rejected</Button>
                  </div>
                </NavDropdown>
        temp.push(t);
      }
      updateDataSet(temp);
    }
  }
 
  return (
    <>
      {
        active==="1"?
        <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Job Posted</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["S.No", "Job ID", "Action"]}
                tableData={data}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>:
      <GridContainer>
        <Button variant="light" onClick={()=>updateActive("1")}>{"<-"} Back</Button>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Students Applied</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["S.No", "Student ID", "Student Name","Email","Phone","Work Experience","Status","Resume","Update Status"]}
                tableData={dataSet}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      }
    </>
  );
}
