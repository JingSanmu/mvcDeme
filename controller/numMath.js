/*
* 用来操作数据，并把数据渲染到ejs中
* */
const {numLuo}=require("../models/numCz")
const {read,write}=require("../models/file")
exports.num=function (req,res) {
    const {number}=req.params;
    numLuo(number)
    const time=new Date();
    read(number,function (result) {
        if(result==-1) { //没有读到文件
            result=numLuo(number)
            write(number, result)
        }
        res.render("demo",{
            list:result,
            time:new Date() - time
        })
    })


    /*
    * 查看文件
    *   1.if data文件夹中没有xx.txt文件，先求number的因数，再写文件，再把文件数据放到ejs中
    *   2.if data文件夹中有xx.txt文件，直接把文件的数据放到ejs中
    * */
}