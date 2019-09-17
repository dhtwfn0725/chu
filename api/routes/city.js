const express = require('express');
const pool = require('../pool');
const router = express.Router();

// 注册路由
router.get("/", (req, res) => {
    var sql = `select * from c_city`;
    pool.query(sql, (err, rs) => {
       // console.log(rs)
        res.send({ code: 0, msg: '获取成功', data: rs });
    });
});
module.exports = router;