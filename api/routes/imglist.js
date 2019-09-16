const express = require('express');
const pool = require('../pool');
const router = express.Router();

// 注册路由
router.get("/", (req, res) => {
    var uid = req.session.uid;
    if (uid == null) {
        res.send({ code: -1, msg: '未登录' });
        return;
    }
    var cid = req.query.cid;
    if (cid == null) {
        res.send({ code: -1, msg: 'cid参数缺失' });
        return;
    }
    var sql = "SELECT *,DATE(upload_time) AS d FROM c_user_imgs WHERE c_id=? and user_id=? order by d desc";
    pool.query(sql, [
        cid, uid
    ], (err, rs) => {
        if (err)
            throw err;
        var data = [];
        console.log(rs)
        //[{date:'2019-09-17',imgs:[]}]
        var dateArr = [];
        for (let i = 0; i < rs.length; i++) {
            let d = rs[i]['d'];
            let img = rs[i]['img'];
            console.log(d, img)
            let index = dateArr.indexOf(d);
            if (index == -1) {
                let len = dateArr.push(d);
                data[len - 1] = {
                    date: d,
                    imgs: [img]
                }
            } else {
                data[index].imgs.push(img);
            }
        }
        res.send({ code: 0, msg: '获取成功', data: data });
    });
});
module.exports = router;