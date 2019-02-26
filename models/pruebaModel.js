const mongoose=require("mongoose");

const pruebaSchema=new mongoose.Schema({
    name:{type:String,
    default:""}
})

const Prueba=module.exports=mongoose.model("prueba",pruebaSchema);


module.exports.guardarPrueba=(prueba,callback)=>{
    Prueba.create(prueba,callback);
}