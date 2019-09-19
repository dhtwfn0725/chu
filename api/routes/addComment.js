const express = require('express');
const pool = require('../pool');
const router = express.Router();

// 暂时不做评论次数限制
router.post("/", (req, res) => {
    let uid = req.session.uid;
    let imgs = req.body.imgs || '';
    let sid = req.body.sid;
    let content = req.body.content;
    if (uid == null) {
        res.send({ code: -1, msg: '未登录', data: [] });
        return;
    }
    let sql = `insert into c_scenic_comment (content,img,user_id,scenic_spot_id) values (?,?,?,?)`;
    pool.query(sql, [content, imgs,uid,sid], (err, ret) => {
        if (err)
            throw err;
        res.send({ code: 0, msg: '评论成功', data: [] })    
    })
});
module.exports = router;