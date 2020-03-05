const express=require("express");
const {num}=require("./controller/numMath")
const app=express();
app.use(express.static("public"))
app.set("view engine","ejs");
app.get("/:number",num)
app.listen("3000",()=>{
    console.log("3000端口启动成功");
})