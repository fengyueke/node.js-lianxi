// 导入 express 模块
const express = require('express');
// 创建 web 服务器
const app = express();
// 通过 express.json() 这个中间件解析表单中的JSON格式的数据
app.use(express.json())
    // 通过 express.urlencoded() 这个中间件，来解析表单中的 url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }))
    // 创建第一个路由 用来测试解析JSON
app.post('/user', (req, res) => {
        console.log(req.body);
        res.send('ok_1');
    })
    // 创建第二个路由 用来测试解析 url-encoded
app.post('/book', (req, res) => {
        console.log(req.body);
        res.send('ok_2')
    })
    // 启用服务器
app.listen(80, function() {
    console.log('http://127.0.0.1');
})