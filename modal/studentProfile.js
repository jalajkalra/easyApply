const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentProfileSchema = new Schema({
    phone:{
        type:String
    },
    addressLine1:{
        type:String
    },
    addressLine2:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    pincode:{
        type:String
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    education:{
        type:Array
    },
    experience:{
        type:Array
    },
    hobbies:{
        type:Array
    },
    interests:{
        type:Array
    },
    language:{
        type:Array
    },
    lastFilledApplication:{
        type:Object
    } 
})

module.exports = mongoose.model("Profile",StudentProfileSchema);