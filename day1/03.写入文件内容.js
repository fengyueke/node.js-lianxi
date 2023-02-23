// 导入 fs 模块
const fs = require('fs')
    // 使用 fs.writeFile() 写入文件内容
    // 参数1 文件路径
    // 参数2 想要写入文件的内容
    // 参数3 回调函数
fs.writeFile('./files/2.txt', 'hello node.js', function(err) {
    // 如果发生错误，则返回一个错误对象
    // console.log(err);
    if (err) {
        return console.log(err.message);
    }
    console.log("写入成功！");
})