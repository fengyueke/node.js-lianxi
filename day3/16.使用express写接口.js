// 导入 express 模块
const express = require('express');
// 创建 web 服务器
const app = express();
// 导入 路由模块
const router = require('./17.apiRouter');
// 使用 Jsonp
app.use('/api/jsonp', (req, res) => {
        // 得到函数的名称
        const backName = req.query.callback;
        // 定义要发送给客户端的数据对象
        const data = { name: 'zs', age: 18 }
            // 拼接字符串 并把数据转换成json数据格式
        const str = `${backName}(${JSON.stringify(data)})`;
        res.send(str);
    })
    // 注册全局中间件
app.use(express.urlencoded({ extended: false }));
// 导入 cors 模块 用来解决跨域问题
const cors = require('cors');
app.use(cors())

app.use('/api', router);



// 启动服务器
app.listen(80, function() {
    console.log("express server running http://127.0.0.1");
})