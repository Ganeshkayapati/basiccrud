const info=(req,res)=>{
    res.json({
        success:true,
        msg:"your api is live",
        error:{},
        data:{}
    })
}

module.exports={
    info
}