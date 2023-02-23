// 导入 fs 模块 来操作文件
const fs = require('fs')

// 调用 fs.readFile() 方法读取文件
// 参数1 读取文件的存放路径
// 参数2 读取文件时采用的编码格式，一般默认指定utf8
// 参数3 回调函数，拿到读取失败和成功的结果 err 失败 dataStr 成功
fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
    console.log(err);
    console.log("---------------");
    console.log(dataStr);
})