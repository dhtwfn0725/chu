const express = require("express")
const router = express.Router();
const pool = require("../pool")

router.get("/", (req, res) => {
    var uid = req.session.uid;
    var act = req.query.act;
    var sid = req.query.sid;
    var actArr = ['add', 'cancle'];
    if (actArr.indexOf(act) == -1) {
        res.send({ code: -2, msg: 'act不合法' });
        return;
    }
    if (sid == null) {
        res.send({ code: -2, msg: 'sid不合法' });
        return;
    }

    
    var sql = "select count(*) as num from c_collect where user_id=? and spot_id=?";
    pool.query(sql, [uid, sid], (err, result) => {
        if (err) throw err;
        var data = result[0];
        if (act == 'add') {
            if (data.num > 0) {
                res.send({ code: -2, msg: '请不要重复收藏' });
                return;
            } else {
                // 新增
                var sql = "insert into c_collect (user_id,spot_id) values (?,?)";
                pool.query(sql, [uid, sid], (err, result) => {
                    if (err) throw err;
                    // 景点收藏量+1
                    var sql2 = "update c_scenic_spot set collection_num=collection_num+1 where id=?";
                    pool.query(sql2,[sid]);
                    res.send({ code: 0, msg: '收藏成功' });
                })
            }
        } else {
            if (data.num == 0) {
                res.send({ code: -2, msg: '没有找到收藏记录' });
                return;
            } else {
                // 取消
                var sql = "delete from c_collect where user_id=? and spot_id=?";
                pool.query(sql, [uid, sid], (err, result) => {
                    if (err) throw err;
                    // 景点收藏量-1
                    var sql2 = "update c_scenic_spot set collection_num=collection_num-1 where id=?";
                    pool.query(sql2,[sid]);
                    res.send({ code: 0, msg: '取消成功' });
                })
            }
        }
    })
})

module.exports = router;