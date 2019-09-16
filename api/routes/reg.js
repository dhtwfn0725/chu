const express = require('express');
const pool = require('../pool');
const router = express.Router();

// 注册路由
router.post("/", (req, res) => {
    var uname = req.body.uname;
    var upwd = req.body.upwd;

    var reg = /^[a-z0-9]{3,12}$/i;
    if (!reg.test(uname)) {
        res.send({ code: -1, msg: '用户名需是3-12位小写字母数字组合', data: [] });
        return;
    }
    if (!reg.test(upwd)) {
        res.send({ code: -1, msg: '密码需是3-12位小写字母数字组合', data: [] });
        return;
    }
    var sql = "SELECT * FROM c_user WHERE username=?";
    pool.query(sql, [
        uname
    ], (err, rs) => {
        if (err)
            throw err;
        if (rs.length != 0) {
            res.send({ code: -1, msg: '用户名已占用', data: [] });
        } else {
            sql = `insert into c_user (username,password,avatar,nickname,createtime) values (?,?,'images/album1.png',?,'2019-09-17 12:12:12')`;
            pool.query(sql, [uname, upwd, uname], (err, result) => {
                if (err)
                    throw err;
                res.send({ code: 0, msg: '注册成功', data: [] });
            })
        }

    });
});
module.exports = router;