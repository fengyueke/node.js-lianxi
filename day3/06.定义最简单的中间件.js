// 导入 express 模块
const express = require('express');
// 创建 web 服务器
const app = express();
// 定义中间件
const mw = function(req, res, next) {
        console.log("这是最简单的中间件函数");
        next();
    }
    // 将mw注册为全局生效的中间件
app.get('/user', (req, res) => {
    res.send('Sky');
})
app.use(mw)
app.get('/', (req, res) => {
    res.send('Hello Word');
})

// 启动服务器
app.listen(80, function() {
    console.log("http://127.0.0.1");
})