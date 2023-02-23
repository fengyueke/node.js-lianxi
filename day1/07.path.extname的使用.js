// 导入 path 模块
const path = require('path')
    // 定义文件路径
const fpath = '/a/b/c/d/index.html'
const extName = path.extname(fpath)
console.log(extName);