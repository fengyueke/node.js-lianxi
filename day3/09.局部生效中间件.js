// 导入express 模块
const express = require('express');
// 创建 web 服务器
const app = express();
// 定义一个中间件
const mw1 = function(req, res, next) {
        console.log('这是一个中间件');
        next();
    }
    // 定义测试路由
app.get('/', mw1, (req, res) => {
        console.log('调用了中间件');
        res.send('测试')
    })
    // 定义对比路由
app.get('/user', (req, res) => {
        res.send('对比')
    })
    // 启用服务器
app.listen(80, function() {
    console.log("http://127.0.0.1");
})