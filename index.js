require('dotenv').config();
const express=require('express');
const router =require('./routes/admin');
const bodyParser = require('body-parser');
const app=express();
const port=process.env.port || 5000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use('/admin',router)
app.listen(port,()=>console.log(`server is lisrening at port number ${port}`))