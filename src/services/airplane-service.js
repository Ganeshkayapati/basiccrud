const{Airplanerepository}=require("../repositories")

const airplanerepository=new Airplanerepository();

async function createAirplane(data){
    try{
        const airplane=await airplanerepository.create(data);
        return airplane;
    }catch(error){
        throw error;
    }
}

module.exports={
    createAirplane
}