// 导入 express 模块
const express = require('express');
// 导入 querystring 模块
const qs = require('querystring');
// 创建web服务器
const app = express();
// 创建自定义中间件
app.use((req, res, next) => {
        // 1.用来监听客户端向服务器发送的数据
        // 使用 str 进行不断的监听数据
        let str = '';
        req.on('data', (chunk) => {
                str += chunk;
            })
            // 2.监听结束传输数据
        req.on('end', () => {
            const body = qs.parse(str);
            console.log(body);
            req.body = body
            next();
        })
    })
    // 定义路由
app.post('/user', (req, res) => {
        res.send(req.body);
    })
    // 启用服务器
app.listen(80, function() {
    console.log('express server running http://127.0.0.1');
})