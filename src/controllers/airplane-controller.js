const {Airplaneservice}=require("../services");
const {StatusCodes}=require("http-status-codes")

async function createAirplane(req,res){
    try{
        console.log(req.body);
        const airplane=await Airplaneservice.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"Successfully created aiplane ",
            data:airplane,
            err:{}
        });
    }catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Something went wrong while creating airplane ",
            data:{},
            err:error
        });
    }
}

module.exports={
    createAirplane
}