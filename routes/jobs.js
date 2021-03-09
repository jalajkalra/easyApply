const express = require('express');
const router = express.Router();
const Job = require("../modal/jobPosting");
const User = require("../modal/students");
const middleware = require("../middleware/is-auth");
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const transporter = nodemailer.createTransport(sendGridTransport({
    auth:{
        api_key:"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"
    }
}));

router.post("/apply",middleware,async(req,res)=>{
    try{
        const data = {
            studentId:req.userId,
            studentName:req.body.studentName,
            workExperience:req.body.experience,
            email:req.body.email,
            phone:req.body.phone,
            resume:req.body.resume,
            status:"Successfully Applied"
        }
        await Job.updateOne({_id:req.body.jobId},{$push:{studentsApplied:data}})
        await User.updateOne({_id:req.userId},{$push:{appliedJobs:req.body.jobId}});
        res.status(200).json({message:"success"});

    }catch(err){
        console.log(err);
        res.status(400).json({message:"error"});
    }
})
router.post("/status",middleware,async(req,res)=>{
    try{
        await Job.updateOne({"_id":req.body.jobId,"studentsApplied.studentId":req.body.studentId},{$set:{"studentsApplied.$.status":req.body.status}});
        transporter.sendMail({
            to:req.body.email,
            from:"jalajkalra4@gmail.com",
            subject:"Test",
            html:`
                <h1>HR Portal</h1>
                <p>Your Status for JobId: ${req.body.jobId} has changed to ${req.body.status}</p>
                <h3>Thank You And Keep Applying For Jobs</h3>    `
        })
        res.status(200).json({message:"success"});
    }catch(err){
        console.log(err)
    }
})

module.exports = router;
