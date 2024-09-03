const express=require('express');
const router=express.Router();
const  {handleGetAdmin}=require('../controllers/admin')
const {validateBody}=require('../middlewares/admin')


router.get('/',validateBody,handleGetAdmin);
module.exports=router