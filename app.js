const express=require("express");
const app=express();
const port=3030;

//REQUIERO ENRUTADOR
const indexRouter = require("./routes/main");

app.use(express.static("public"));
app.listen(port, ()=> console.log("El servidor está corriendo en puerto "+port));

app.use("/",indexRouter);
