const {getAdminService}=require('../Services/adminLogin')
const handleGetAdmin=(req,res)=>{
    if(req.body.userName && req.body.password){
       const result= getAdminService(req.body);
       console.log(result);
       res.send(result)
    }
}
module.exports={handleGetAdmin}