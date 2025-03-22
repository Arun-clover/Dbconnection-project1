const mongoose = require('mongoose');

const studentDataSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:Number,
        required:true
    },
    Department:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    section:{
        type:String,
        required:true
    }
});

const studentData=mongoose.model('studentData',studentDataSchema);
module.exports=studentData;