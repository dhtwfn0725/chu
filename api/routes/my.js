const express = require('express');
const pool = require('../pool');
const router = express.Router();


// 我的接口
router.get("/", (req, res) => {

    var uid =  req.session.uid;console.log(uid)
    if(uid == undefined){
        res.send({code:-1,msg:'未登录'});
        return;
    }
    //  获取当前用户图片数
    var sql1 = `select count(*) as pic_num from c_user_imgs where user_id = ${uid}`;
    
   
    //  获取当前用户的图片集
    pool.query(sql1, [uid], (err, result) => {
        if (err)
            throw err;
        var {pic_num} = result[0];
        //  获取当前用户评论数  未删除的
        var sql2 = `select count(*) as comment_num from c_scenic_comment where user_id=${uid} and is_delete=0`;
        pool.query(sql2, [uid], (err, result) => {
            if (err)
            throw err;
            var {comment_num} = result[0]; 

             //  获取当前用户的收藏数
             var sql3 = `select count(*) as collect_num from c_collect where user_id=${uid}`;
             pool.query(sql3, [uid], (err, result) => {
                if (err)
                throw err;
                var {collect_num} = result[0];

                var sql4 = `select a.*,b.img from c_img_category a LEFT JOIN (SELECT user_id,img from c_user_imgs WHERE user_id=${uid} limit 1) as b on a.user_id=b.user_id where a.user_id=${uid} `;
                pool.query(sql4, [uid], (err, result) => {
                    if (err)
                    throw err;
                    var obj = {pic_num,comment_num,collect_num,result};
                    res.send({code:0,msg:'获取成功',data:obj});
                })
            })
        })


    });
});
module.exports = router;