// import the required modules
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const path = require('path');
const port= process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoDb = require('./config/db.js');
const studentData = require('./modules/schema.js');


// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

// connect to database
MongoDb();

//get all students data
app.post('/studentData',async(req,res)=>{
    const {name,rollno,Department,year,section} = req.body;
    if(!name || !rollno || !Department || !year || !section){
        return res.status(400).json({error:"All fields are required"});
    }
    try{
        const student=new studentData({name,rollno,Department,year,section});
        await student.save();
        res.status(200).json({message:"Data saved successfully"});
    }catch(error){
        res.status(500).json({message:"Internal server error"});
    }
});

// routes
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","front.html"));
});

//Start server
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});