// 导入 express 模块
const express = require('express');
// 建立服务器
const app = express();
// 使用express.static()方法快速对外提供资源
app.use('/filer', express.static('./filer'));
app.use(express.static('./clock'));

// 启用服务器
app.listen(80, function() {
    console.log("express server running http://127.0.0.1");
})