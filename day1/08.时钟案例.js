// 1.定义两个正则，用来匹配style和script
const style = /<style>[\s\S]*<\/style>/
const script = /<script>[\s\S]*<\/script>/
    // 2.使用fs模块，读取需要被处理的HTML我呢见
const fs = require('fs')
const path = require('path')
const fpath = path.join(__dirname, '时钟案例/index.html')
fs.readFile(fpath, 'utf8', function(err, dataStr) {
        if (err) {
            return console.log('发生错误:' + err.message);
        }
        // console.log('读取成果：' + dataStr);
        resolveCSS(dataStr)
        resolveJS(dataStr)
        resolveHTML(dataStr)
    })
    // 3.自定义resolveCSS方法，来写入index.css 样式文件
function resolveCSS(dataStr) {
    const r1 = style.exec(dataStr)
        // 将数组替换成字符串
    const cssStr = r1[0].replace('<style>', '').replace('</style>', '')
        // 将匹配到的内容写入cooke文件中
    fs.writeFile(path.join(__dirname, 'cooke/index.css'), cssStr, function(err) {
        if (err) {
            return console.log('写入错误' + err.message);
        }
        console.log('写入成功');
    })

}
// 4.自定义 resolveJS方法来写入index.js脚本文件
function resolveJS(dataStr) {
    const r2 = script.exec(dataStr)
        // 将匹配的数组转化为字符串
    const jsStr = r2[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, 'cooke/index.js'), jsStr, function(err) {
        if (err) {
            return console.log('写入错误:' + err.message);
        }
        console.log('写入成功！');
    })

}
// 5.自定义 resolveHTML方法来写入index.html 文件
function resolveHTML(dataStr) {
    // 将内嵌style和script 转化为外联式
    const newHtml = dataStr.replace(style, '<link rel="stylesheet" href="../cooke/index.css">').replace(script, '<script src="../cooke/index.js"></script>')
    fs.writeFile(path.join(__dirname, 'cooke/index.html'), newHtml, function(err) {
        if (err) {
            console.log('写入错误：' + err.message);
        }
        console.log('写入成功');
    })
}