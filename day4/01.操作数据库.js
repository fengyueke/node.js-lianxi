// 导入mysql 模块
const mysql = require('mysql');
// 建立与MySQL 数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1', //数据库 IP 地址
    user: 'root', //登录数据库账号
    password: 'admin123', //登录数据库密码
    database: 'my_db_01' //指定要操作哪个数据库
});

// 测试mysql模块是否出错
// db.query('SELECT 1', (err, results) => {
//     // mysql 模块出错
//     if (err) { return console.log(err); }
//     // 成功
//     console.log(results);
// })

// 查询 users 表中的所有数据
// const sqlStr = 'SELECT * FROM users';
// db.query(sqlStr, (err, results) => {
//     if (err) return console.log(err);
//     console.log(results);
// })

// 向 users 插入数据
// 定义 要插入的数据对象
// const user = { name: '小芳', age: 21, sex: '女' }
//     // 待执行的SQL语句 ？代表占位符
// const sqlStr = 'INSERT INTO users (name,age,sex) VALUES(?,?,?)';
// // 使用数据的形式，依次为？占位符指定具体的值
// db.query(sqlStr, [user.name, user.age, user.sex], (err, results) => {
//     if (err) { return console.log(err); }
//     // 通过 影响的函数 去判断 是否操作成功
//     if (results.affectedRows === 1) { console.log("操作成功"); }
// })
// 插入数据的简单版
// 先定义要插入的数据对象
// const user = { name: '小明', age: 20, sex: '男' };
// // 待执行的SQL语句
// const sqlStr = 'INSERT INTO users SET ?';
// db.query(sqlStr, user, (err, results) => {
//     if (err) { return console.log(err); }
//     if (results.affectedRows === 1) { console.log('操作成功'); }
// })

// 更新数据
// 定义插入数据库中的数据对象
// const user = { id: 5, name: '小刚', age: 25 };
// // 待执行的SQL语句
// const sqlStr = 'UPDATE users SET name=?,age=? WHERE id=?';
// db.query(sqlStr, [user.name, user.age, user.id], (err, results) => {
//     if (err) { return console.log(err); }
//     if (results.affectedRows === 1) { console.log('操作成功'); }
// })

// 更新数据的快捷方式
// const user = { id: 5, name: '明治', age: 30 };
// // 待执行的SQL语句
// const sqlStr = 'UPDATE users SET ? WHERE id=?';
// db.query(sqlStr, [user, user.id], (err, results) => {
//     if (err) { return console.log(err); }
//     if (results.affectedRows === 1) { console.log('操作成功'); }
// })

// 删除数据的快捷方式
// 待执行的SQL语句
const sqlStr = 'DELETE FROM users where id=?';
db.query(sqlStr, 5, (err, results) => {
    if (err) { return console.log(err); }
    if (results.affectedRows === 1) { console.log('操作成功'); }
})