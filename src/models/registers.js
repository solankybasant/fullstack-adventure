const mongoose = require("mongoose")

const sneakySchema = new mongoose.Schema({
    Yname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    date:{
        type:String,
        required:true
    },
    people:{
        type:String,
        required:true
    }

})

// now we need to create mongoose.Collection

const Register = new mongoose.model("Sneaky", sneakySchema);
module.exports=Register;