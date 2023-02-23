// 导入http 模块
const http = require('http')
    // 创建web服务器
const server = http.createServer()
    // 给server绑定request事件，用来监听客户端的请求
server.on('request', (req, res) => {
        const url = req.url
        const method = req.method
        const str = `Your request url is ${url},and request method is ${method}`
        console.log(str);
        // 调用res.end()方法，向客户端响应一些内容
        res.end(str)
    })
    // 启动服务器
server.listen(80, function() {
    console.log('server running http://127.0.0.1');
})