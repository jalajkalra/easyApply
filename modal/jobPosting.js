const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobPostingSchema = new Schema({
    companyName:{
        type:String,
        required:true
    },
    jobDate:{
        type:Date,
        required:true
    },
    jobPosition:{
        type:String
    },
    primarySkills:{
        type:String
    },
    secondarySkills:{
        type:String
    },
    responsibilities:{
        type:String
    },
    description:{
        type:String
    },
    location:{
        type:String
    },
    experience:{
        type:String,
    },
    expectedSalary:{
        type:String
    },
    studentsApplied:{
        type:Array
    },
    companyId:{
        type:mongoose.Types.ObjectId,
        ref:"Company"
    } 
})

module.exports = mongoose.model("Job",JobPostingSchema);