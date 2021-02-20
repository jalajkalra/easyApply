const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }, 
    profileId:{
        type:mongoose.Types.ObjectId,
        ref:'Profile'
    }
})

module.exports = mongoose.model("Student",StudentSchema);