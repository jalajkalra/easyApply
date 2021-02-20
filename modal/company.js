const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    jobPosted:{
        type:Array
    },
    companyName:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    noOfEmployees:{
        type:String,
        required:true
    },
    locations:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    companyLogo:{
        type:String
    },
    description:{
        type:String
    },
    companyQuotes:{
        type:String
    },
    companyKeyWords:{
        type:String
    },
    workingAtCompany:{
        type:String
    },
    profileCompleted:{
        type:Boolean,
        default:false
    },
    videos:{
        type:String
    },
    images:{
        type:Array
    }
})

module.exports = mongoose.model("Company",CompanySchema);