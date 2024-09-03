const bcrypt=require('bcrypt');
const hashPass=async (ogPass)=>{
return await bcrypt.hash(ogPass,10);
}
const decryptPass=()=>{

}

module.exports={hashPass,decryptPass}