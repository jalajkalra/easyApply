const express = require('express');
const Company = require('../modal/company');
const Job = require('../modal/jobPosting');
const router = express.Router();
const nanoid = require('nanoid').nanoid;
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const validator = require('validator');
const bcrypt = require('bcryptjs');
const middleware = require('../middleware/is-auth');
const jwt = require('jsonwebtoken');

const transporter = nodemailer.createTransport(sendGridTransport({
    auth:{
        api_key:"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"
    }
}));

router.post("/registration",async(req,res)=>{
    try{
        let errors = [];
        if(!validator.isEmail(req.body.email)){
            errors.push({message:"Email is not valid"});
        }
        if(errors.length>0){
            const error = new Error("Invalid input.");
            error.data = errors;
            error.code = 422;
            throw error
        }
    const user = await Company.find({companyName:req.body.company});
    if(user.length>0){
        return res.status(403).json({error:"Company Already Exists !!!"})
    }
    const password = await nanoid();
    const hashPassword = await bcrypt.hash(password,12);
    const company = new Company({
        email:req.body.email,
        password:hashPassword,
        jobPosted:[],
        companyName:req.body.company,
        phone:req.body.phone,
        noOfEmployees:req.body.noOfEmployees,
        locations:req.body.country,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        companyLogo:'',
        description:'',
        companyQuotes:'',
        companyKeyWords:'',
        workingAtCompany:'',
        videos:'',
        images:[],
        profileCompleted:false
    })
    const result = await company.save();
    transporter.sendMail({
        to:req.body.email,
        from:"jalajkalra4@gmail.com",
        subject:"Test",
        html:`
            <h1>HR Portal</h1>
            <p>You Have Successfully Registered.Please Update Your Profile in Your Dashboard</p>
            <p>Dashboard Link: <a href="https://easyapply-jobs-internship.herokuapp.com/companyLogin">Click Here</a></p>
            <p>Login Email: ${req.body.email}</p>
            <p>Password: ${password} (Please change your password in dashboard)</p>
            <h3>Thank You For Registering in our Company</h3>    `
    })
    res.status(200).json({message:'success'});
    }catch(err){
        console.log(err);
        res.status(404).json({message:'fail'});
    }
})

router.post('/login',async(req,res)=>{
    try{
        const user  = await Company.findOne({email:req.body.email});
        if(!user){
            return res.json({error:'Wrong Credentials!!!'});
        }
        const isEqual = await bcrypt.compare(req.body.password,user.password);
        if(!isEqual){
            return res.status(403).json({error:'Wrong Credentials!!!'});
        }
        const token = await jwt.sign({userId:user._id,email:user.email},"somesupersecretkey")
        res.status(200).json({token,message:'success'});
    }catch(e){
        console.log(e)
        res.status(404).json({message:'fail'});
    }
})

router.get("/getCompanies",async(req,res)=>{
    try{
        const companies = await Company.find({profileCompleted:true});
        if(companies.length>0){
            res.status(200).json({message:'success',companies});
        }
        res.status(200).json({message:'no data found',companies:[]})
    }catch(err){
        console.log(err);
        res.send(404).json({message:'fail'})
    }
})

router.get("/getPostedJobs",middleware,async(req,res)=>{
    try{
        const companies = await Company.findById(req.userId);
        if(companies){      
            res.status(200).json({message:'success',data:companies.jobPosted});
        }
        res.status(200).json({message:'no data found',data:[]})
    }catch(err){
        console.log(err);
        res.send(404).json({message:'fail'})
    }
})

router.get("/getCompanies/:id",async(req,res)=>{
    try{
        const companies = await Company.findById(req.params.id);
        if(companies){
            res.status(200).json({message:'success',companies});
        }
        res.status(200).json({message:'no data found',companies:{}})
    }catch(err){
        console.log(err);
        res.send(404).json({message:'fail'})
    }
})


router.post('/updateProfile',middleware,async(req,res)=>{
    try{
        const company = {
            noOfEmployees:req.body.noOfEmployees,
            locations:req.body.locations,
            companyLogo:req.body.companyLogo,
            description:req.body.description,
            companyQuotes:req.body.companyQuotes,
            companyKeyWords:req.body.companyKeyWords,
            workingAtCompany:req.body.workingAtCompany,
            videos:req.body.videos,
            images:req.body.images,
            profileCompleted:true
        }
    await Company.updateOne({_id:req.userId},{$set:company});
    transporter.sendMail({
        to:req.body.email,
        from:"jalajkalra4@gmail.com",
        subject:"Test",
        html:`
            <h1>HR Portal</h1>
            <p>You Have Successfully Updated Your Profile</p>  `
    })
    res.status(200).json({message:'success'});
    }catch(err){
        res.sendStatus(404).json({message:'fail'});
    }
})

router.post('/getJobById',async(req,res)=>{
    const user = await Job.findById(req.body.id);
    if(user){
        res.json({user,message:"success"});
    }else{
        res.json({message:"fail",user:{}})
    }
})

router.post('/getLatestJobs',async(req,res)=>{
    const user = await Job.find(req.body.id);
    if(user){
        let newArray;
        if(user.length>=3){
            newArray = [user[user.length-1],user[user.length-2],user[user.length-3]]
        }else{
            newArray=[...user];
        }
        res.json({user:newArray,message:"success"});
    }else{
        res.json({message:"fail",user:{}})
    }
})

router.get('/getJobs',async(req,res)=>{
    const user = await Job.find();
    if(user){
        res.status(200).json({user,message:"success"});
    }else{
        res.status(404).json({message:"fail",user:[]})
    }
})

router.get("/checkAuthState",middleware,async(req,res)=>{
    console.log("Hello");
    if(req.isAuth){
        try{
            const user = await Company.findById(req.userId);
            if(user){
                return res.status(200).json({message:'success'});     
            }
            return res.status(200).json({error:"No Data Found !!!"});
        }catch(err){
            console.log(err);
            res.json({message:'fail'});
        }
    }else{
        res.json({message:'fail'});
    }
})

router.post('/postAd',middleware,async(req,res)=>{
    if(req.isAuth){
        try{
            const company = await Company.findById(req.userId);
            const data = new Job({
                companyName:company.companyName,
                jobPosition:req.body.jobPosition,
                primarySkills:req.body.primarySkills, 
                secondarySkills:req.body.secondarySkills ,
                responsibilities:req.body.responsibilities ,
                description:req.body.description ,
                location:req.body.location ,
                companyId:req.userId ,
                experience:req.body.experience,
                expectedSalary:req.body.expectedSalary,
                jobDate:new Date(),
                studentsApplied:[]
            });
            const result = await data.save();
            const user = await Company.findOneAndUpdate({_id:req.userId},{$push:{jobPosted:result._id}});
            if(user){
                res.status(200).json({message:"success"});
            }else{
                res.json({message:"fail"})
            }
        }catch(err){
            console.log(err);
            res.send(400).json({message:"fail"})
        }
    }else{
        res.json({message:"token not valid"})
    }
})

module.exports=router;