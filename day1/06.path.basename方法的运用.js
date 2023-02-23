// 导入path 模块
const path = require('path')
    // 定义文件的路径
const fpath = '/a/b/c/d/index.html';
// const fullName = path.basename(fpath)
// console.log(fullName); //输出 index.html
const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt);