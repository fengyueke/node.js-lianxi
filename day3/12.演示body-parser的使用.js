// 导入 express 模块
const express = require('express');

// 创建 web 服务器
const app = express();
// 导入 body-parser 模块
const parser = require('body-parser')
    // 注册 中间件
app.use(parser.urlencoded({ extended: false }))
    // 定义一个路由
app.post('/user', (req, res) => {
        console.log(req.body);
        res.send('ok')
    })
    // 启用服务器
app.listen(80, function() {
    console.log("http://127.0.0.1");
})