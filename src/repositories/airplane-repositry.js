const crudrepoisitary=require("./crud-repositary");
const {Airplane}=require("../models")


class Airplanerepository extends crudrepoisitary{
    constructor(){
        super(Airplane);
    }
}
module.exports=Airplanerepository