const joi=require('joi');
const validateBody=(req,res,next)=>{
   const schema=joi.object().keys({
    userName:joi.string().required(),
    password:joi.string().required(),
    confirmPass:joi.string().valid(joi.ref('password')).required(),
    search:joi.string().optional(),
    category:joi.string().optional().valid("a","b","c"),
    amount:joi.number().integer().min(1).max(100),
    age:joi.number().when("userName",{is :'Admin',then:joi.required(),otherwise:joi.optional()}),
    item:joi.object().keys({
        id:joi.number().integer().required(),
        itemName:joi.string().required()
    }),
    countries:joi.array(),
    regularExpressions:joi.string().pattern(new RegExp()),
    email:joi.string().email({
        minDomainSegments:2,
        tlds:{allow:['com','in','org']}
    }),
    custom_name:joi.string().custom((val,msg)=>{
        if(val=="admin"){
            return msg.message("this is a reserved name you can not use it ")
        }
    })
   }).unknown(false)
   const {error}=schema.validate(req.body,{abortEarly:false})
 if(error){
    const {details}=error
    res.status(400).json({error:details})
 }
 else
    next();
}
module.exports={validateBody}