const db=require('../models')
const bcrypt=require('bcrypt')

const getAdminService=async (body)=>{
 
const Admin=await db.admin.findOne({})
const reqUserName=await body.userName;
const reqPassword=await body.password;

const userName=await Admin.userName;
const password=await Admin.password;

const match=await bcrypt.compare(reqPassword,password);

if(match && userName==reqUserName){
 return true
}
else{
    return false
}


 
}
module.exports={getAdminService}



// {
//     "userName":"John Doe",
//     "password":"Doddd22e",
//     "search":"sdf",
//     "confirmPass":"Doddd22e",
//     "email":"sd@f.in",
//     "category":"c",
//     "custom_name":"admhin",
//     "amount":1,
//     "age":90,
//     "item":{
//         "id":   22,
//         "itemName":"poster"
//     }