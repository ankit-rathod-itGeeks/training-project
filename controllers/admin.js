const {getAdminService}=require('../Services/adminLogin')
const handleGetAdmin=async (req,res)=>{
   if(req.body.userName && req.body.password){
    const result=await getAdminService(req.body);
       
    if(result){
      res.json({msg:"login successfull"})
    }
    else{
      res.json({msg:"invalid credentials"})
    }
   }
   else{
    res.send("didnt get any username or password")
   }
      
    
}
module.exports={handleGetAdmin}