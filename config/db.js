const mongoose = require('mongoose');

const connectDB=async()=>{
    try{
        const studentData=await mongoose.connect(process.env.MONGO_URl);
        console.log(`MongoDb connectes to ${studentData.connection.host} ...`);
    }catch(error){
        console.log("An error occured while connecting to the database"+error);
        process.exit(1);
    }
}

module.exports=connectDB;