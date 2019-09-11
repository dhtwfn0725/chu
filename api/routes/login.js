const express = require('express');
const pool = require('../pool');
const router=express.Router();


// 登录路由
router.get("/login", (req, res) => {
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
module.exports=router;