const express = require('express');
const router = express.Router();
const Student = require('../modal/students');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const Profile = require('../modal/studentProfile');
const middleware = require("../middleware/is-auth");

router.post('/registration',async(req,res)=>{
    try{
        let errors = [];
        if(!validator.isEmail(req.body.email)){
            errors.push({message:"Email is not valid"});
        }
        if(validator.isEmpty(req.body.password) || !validator.isLength(req.body.password,{min:5})){
            errors.push({message:"Password is not valid"});
        }
        if(errors.length>0){
            const error = new Error("Invalid input.");
            error.data = errors;
            error.code = 422;
            throw error
        }
    const user = await Student.find({email:req.body.email});
    if(user.length>0){
        return res.status(403).json({error:"User Already Exists !!!"})
    }
    const profile = new Profile({
        phone:'',
        addressLine1:'',
        addressLine2:'',
        city:'',
        state:'',
        pincode:'',
        firstName:'',
        lastName:'',
        education:[],
        experience:[],
        hobbies:[],
        interests:[],
        language:[],
        lastFilledApplication:{}
    })
    const profileMade = await profile.save();
    const hashPassword = await bcrypt.hash(req.body.password,12);
    const newUser = new Student({
        email:req.body.email,
        password:hashPassword,
        appliedJobs:[],
        profileId:profileMade.id,
    })
    const result = await newUser.save();
    const token = await jwt.sign({userId:result._id,email:result.email},"somesupersecretkey")
    return res.status(200).json({token,message:'success'});
    }catch(err){
        console.log(err);
        res.status(404).json({message:'fail'});
    }
})

router.post('/login',async(req,res)=>{
    try{
        const user  = await Student.findOne({email:req.body.email});
        if(!user){
            return res.json({error:'Wrong Credentials!!!'});
        }
        const isEqual = await bcrypt.compare(req.body.password,user.password);
        if(!isEqual){
            return res.status(403).json({error:'Wrong Credentials!!!'});
        }
        const token = jwt.sign({userId:user.id,email:user.email},"somesupersecretkey")
        return res.status(200).json({token,message:'success'});
    }catch(e){
        console.log(e);
        res.status(404).json({message:'fail'});
    }
})

router.post('/',async(req,res)=>{
        const user = await User.findOne({_id:req.body.userId});
        if(user){
            res.json({user});
        }else{
            res.json({message:"fail"})
        }
         
    
})

router.get("/checkAuthState",middleware,async(req,res)=>{
    if(req.isAuth){
        try{
            const user = await Student.findById(req.userId);
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

router.get("/check/:id",middleware,async(req,res)=>{
    if(req.isAuth){
        try{
            const user = await Student.findById(req.userId);
            if(user){
                if(user.appliedJobs&&user.appliedJobs.indexOf(req.params.id)==-1){
                    return res.status(200).json({message:'success'}); 
                }else{
                    return res.status(200).json({message:"Already Applied"});
                }     
            }
        }catch(err){
            console.log(err);
            res.json({message:'Something Went Wrong!'});
        }
    }else{
        res.json({message:'Please Login To Apply For Jobs/Internships'});
    }
})
module.exports = router;