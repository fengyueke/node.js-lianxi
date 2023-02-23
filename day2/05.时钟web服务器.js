// 导入 http 模块
const http = require('http');
// 导入 fs 模块
const fs = require('fs')
    // 导入 path 模块
const path = require('path')
    // 创建web服务器
const server = http.createServer();
// 给server添加request事件，用来监听客户端的请求
server.on('request', (req, res) => {
        const url = req.url
        let fpath = '';
        if (url === '/') {
            fpath = path.join(__dirname, './cooke/index.html')
        } else {
            fpath = path.join(__dirname, '/cooke', url)
        }
        fs.readFile(fpath, 'utf8', function(err, dataStr) {
            if (err) {
                return res.end('<h1>404 Not Found<h1>')
            }
            // res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.end(dataStr)
        })
    })
    // 启动服务器
server.listen('80', function() {
    console.log('server running http://127.0.0.1');
})