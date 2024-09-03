const db=require('../models')

const getAdminService=async (body)=>{
const isAdmin=await db.admin.findAll({})
return isAdmin
}
module.exports={getAdminService}