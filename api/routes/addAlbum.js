const express = require('express');
const pool = require('../pool');
const router = express.Router();
const Config = require('../units/config');
// 添加相册
router.post("/", (req, res) => {
    let uid = req.session.uid;
    let img = Config.domain + req.body.img;
    let name = req.body.name;
    if (uid == null) {
        res.send({ code: -1, msg: '未登录', data: [] });
        return;
    }
    let sql = `insert into c_img_category (name,user_id,img) values (?,?,?)`;
    pool.query(sql, [name, uid, img], (err, ret) => {
        if (err)
            throw err;
        res.send({ code: 0, msg: '新建相册成功', data: [] })
    })
});
module.exports = router;