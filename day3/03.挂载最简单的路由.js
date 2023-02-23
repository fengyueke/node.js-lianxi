// 导入 express 模块
const express = require('express');
// 建立web服务器
const app = express();
// 挂载最简单的路由
app.get('/', (req, res) => {
    console.log();
    res.send("Hello Word");
})
app.post('/', (req, res) => {
        console.log("Post Request");
        res.send("Post Request");
    })
    // 启用服务器
app.listen(80, function() {
    console.log("express server running http://127.0.0.1");
})