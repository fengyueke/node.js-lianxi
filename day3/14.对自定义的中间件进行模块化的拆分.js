// 导入 express 模块
const express = require('express');

// 创建web服务器
const app = express();
// 导入自己封装的模块
const myBodyParser = require('./15.custom-body-parser.js');
app.use(myBodyParser);
// 定义路由
app.post('/user', (req, res) => {
        res.send(req.body);
    })
    // 启用服务器
app.listen(80, function() {
    console.log('express server running http://127.0.0.1');
})