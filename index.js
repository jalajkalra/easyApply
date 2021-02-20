const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const CompanyRoute = require("./routes/company");
const UserRoute = require("./routes/student");
const mongoose = require('mongoose');
// const nodemailer = require("nodemailer");
// const sendGridTransport = require("nodemailer-sendgrid-transport");

// const transporter = nodemailer.createTransport(sendGridTransport({
//     auth:{
//         api_key:"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"
//     }
// }));

app.use(cors());
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
 

 
app.use("/company",CompanyRoute);
app.use("/user",UserRoute);
 

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));

    app.use('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    })
}

mongoose.connect("mongodb+srv://Jalaj:AvRtggZAF1xWgfFT@cluster0.km58y.mongodb.net/Gennext?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology:true })
.then(app.listen(process.env.PORT||5000,()=>console.log("Server has started")))
.catch(err=>console.log(err))