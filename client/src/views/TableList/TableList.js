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
import { GetJobsPosted } from "../../utilities/apiIntegration.js";
import {Button} from 'react-bootstrap';

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
  useEffect(()=>{
    (async()=>{
      const response = await GetJobsPosted()
      if(response.message==="success"&&response.data!=undefined&&response.data.length>0){
        let temp = [];
        for(let i = 0;i<response.data.length;i++){
          let t = [];
          t[0] = i+1;
          t[1] = response.data[i];
          t[2] = <Button>More Info</Button>
          temp.push(t);
        }
        updateData(temp);
      }
    })()
  },[])
  return (
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
    </GridContainer>
  );
}
