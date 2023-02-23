// 导入 express 模块
const express = require('express');
// 创建web服务器
const app = express();
// 创建一个错误级别路由
app.get('/', (req, res) => {
        throw new Error('服务器内部发生错误');
        res.send('Home Page');
    })
    // 定义一个错误级别的中间件
app.use((err, req, res, next) => {
        console.log("发生了错误:" + err.message);
        res.send('Error:' + err.message)
    })
    // 启用服务器
app.listen(80, function() {
    console.log("http://127.0.0.1");
})