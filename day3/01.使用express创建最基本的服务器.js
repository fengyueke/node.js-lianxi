// 导入 express 模块
const express = require('express');
// 创建web服务器
const app = express();
// 监听get请求
app.get('/user', (req, res) => {
        // 调用express提供的res.send()方法，向客户端响应一个JSON对象
        res.send({ name: 'zs', age: 18, sex: '男' });
    })
    // 监听post请求
app.post('/user', (req, res) => {
        // 调用express提供的res.send()方法，向客户端响应一个文本字符串
        res.send('请求成功')
    })
    // 通过req.query可以获取到客户端发送过来的 查询参数
    //   默认情况下req.query 是空对象
app.get('/', (req, res) => {
        console.log(req.query);
        res.send(req.query);
    })
    // 动态参数
    // 这里的 :id 是动态参数
app.get('/user/:id', (req, res) => {
        //  req.params 是动态匹配到的 URL 默认是空对象
        console.log(req.params);
        res.send(req.params);
    })
    // 启用服务器
app.listen(80, function() {
    console.log("express server running http://127.0.0.1");
})