/*
* models文件用来对数据进行逻辑操作
* */
exports.numLuo=function (number) {
    let list=[];
    for (let i = 1; i <= number;i++){
        if (number % i==0){
            list.push(i)
        }
    }
    return list
}