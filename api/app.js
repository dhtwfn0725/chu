//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const session = require('express-session');
const pool = require('./pool');

// 创建服务器
var server = express();
server.listen(8080);

// 将session加密
server.use(session({secret: "128位字符串", resave: true, saveUninitialized: true}));

// 跨域处理
server.use(cors({
    origin: [
        "http://127.0.0.1:5500", "http://localhost:8080"
    ], //不能用*
    credentials: true
}));

//使用body-parser中间件
server.use(bodyParser.urlencoded({extended: false}));

// 配置静态资源目录 server.use(express.static("public")); 登录路由
server.get("/login", (req, res) => {
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    console.log(uname);
    console.log(upwd);
    var sql = "SELECT id FROM c_user WHERE username=? AND password=?";
    pool.query(sql, [
        uname, upwd
    ], (err, rs) => {
        if (err) 
            throw err;
        if (rs.length == 0) {
            res.send({code: -1, msg: "用户名或密码错误"});
            console.log(rs);
        } else {
            var uid = rs[0].id;
            req.session.uid = uid;
            res.send({code: 1, msg: "登录成功"});
            console.log(rs);
        }
        
    });
});

