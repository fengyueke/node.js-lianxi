const fs = require('fs')
fs.readFile('./files/成绩.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读取错误：' + err.message);
    }
    // console.log("读取成功" + dataStr);
    // 先把数据用空格分开
    const arrOld = dataStr.split(" ")
        // 循环分割后的数据对每项数据进行字符串的替换操作
    const arrNew = []
    arrOld.forEach(item => {
            arrNew.push(item.replace('=', ":"))
        })
        // 把新数组中的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join('\r\n')
    fs.writeFile('./files/成绩-ok.txt', newStr, function(err) {
        if (err) {
            return console.log('发生错误' + err);
        }
        console.log('写入成功');
    })
})