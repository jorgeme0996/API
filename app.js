const express=require("express"),
app=express(),
bodyParser=require("body-parser"),
cors=require("cors"),
helmet=require("helmet"),
mongoose=require("mongoose"),
config=require("./config/db");

mongoose.connect(config.db,{useNewUrlParser:true});

const port=process.env.PORT||3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(helmet());

require("./routes/rutasPrueba")(app);


app.listen(port,(req,res)=>{
    console.log("conectado en "+port);
    
})