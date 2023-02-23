// 导入 fs 模块
const fs = require('fs')
    // 调用fs.readFile方法
fs.readFile('./files/1.txt', function(err, dataStr) {
    if (err) {
        return console.log("读取失败:" + err);
    }
    console.log("读取成功，内容为：" + dataStr);
})