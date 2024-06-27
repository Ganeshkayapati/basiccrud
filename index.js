
const express=require("express");
// const router=express.Router();
const apiRoutes=require("./src/routes")
const {serverConfig,logger}=require("./src/config")


app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api",apiRoutes);
app.listen(serverConfig.PORT,()=>{
    console.log(`Listening to Port ${serverConfig.PORT}`);
    logger.info("Suucesfully started server","src",{});
})  