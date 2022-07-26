//dotenv
require('dotenv').config();
//connect DB
const {connectDB}=require('./configs/db');
const express = require('express');
const cors=require('cors');
//import Routes
const authRoute=require('./routes/authRoute');
const songRoute=require('./routes/songRoute');
const {errorHandler}=require('./middleware/errorHandler');

connectDB();
const app=express();


const port=process.env.APP_PORT;
//Cors
app.use(cors());
// Body_Parser
app.use(express.json());


//Mount the Route
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/song',songRoute);
//Unhandle routes
// app.all('*',(req,res,next)=>{
//     const err= new Error('The route can not be found');
//     err.statusCode=404;
//     next(err);
// })
// app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
