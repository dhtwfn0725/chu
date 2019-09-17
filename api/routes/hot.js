const express = require('express');
const pool = require('../pool');
const router = express.Router();

// 注册路由
router.get("/", (req, res) => {
    var page = req.query.page || 1;
    var offset = (page - 1) * 5;
    var sql = `select * from c_scenic_spot where is_hot=1 limit ${offset},5`;
    pool.query(sql, (err, rs) => {
       // console.log(rs)
        res.send({ code: 0, msg: '获取成功', data: rs });
    });
});
module.exports = router;