// 导入 http 模块
const http = require('http')
    // 创建web服务器
const server = http.createServer()
    // 给server绑定request事件，用来监听客户端的请求
server.on('request', (req, res) => {
        const url = req.url
        const method = req.method
        const str = `您请求的地址是${url}并且请求方式是${method}`;
        console.log(str);
        // 解决中文乱码
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
            //用res.end 方法 响应客户端
        res.end(str)
    })
    // 启动服务器
server.listen('80', function() {
    console.log("server running http://127.0.0.1");
})