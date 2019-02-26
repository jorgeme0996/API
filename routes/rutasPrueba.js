const Prueba=require("../models/pruebaModel");

module.exports=(app)=>{
    app.post("/api/prueba",(req,res)=>{
        const prueba=req.body;
        Prueba.guardarPrueba(prueba,(error,success)=>{
            if(error){
                res.status(500).json({error:error,msg:"errror"})
            }else{
                res.status(200).json(success)
            }
        })
    })
}