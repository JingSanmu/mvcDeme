/*
* 读写文件
* */
const fs=require("fs")
//读文件

exports.read=function (number,callback) {
    fs.readFile(`./data/${number}.txt`,(err,data)=>{
        if (err){
            callback(-1)
        }else{
            callback(JSON.parse(data.toString()))
        }
    })
}
exports.write=function (number,shuju) {
    fs.writeFile(`./data/${number}.txt`,JSON.stringify(shuju),(err)=>{
        if (err){
            console.log("写入失败");
        } else{
            console.log("写入成功");
        }
    })
}