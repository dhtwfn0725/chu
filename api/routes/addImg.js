const express = require('express');
const pool = require('../pool');
const router = express.Router();

// 注册路由
router.post("/", (req, res) => {
    let uid = req.session.uid;
    let imgUrl = req.body.imgurls;
    let cid = req.body.cid;
    if(uid == null){
        res.send({code:-1,msg:'未登录',data:[]});
        return;
    }
    if(imgUrl instanceof Array){
        let sql = `select * from c_img_category where user_id=? and id=?`;
        pool.query(sql,[uid,cid],(err,ret)=>{
            if (err)
            throw err;
            if(ret.length == 0){
                res.send({code:-2,msg:'cid参数错误',data:[]}); 
                return;
            }else{
                let values = ``;
                for (let i = 0; i < imgUrl.length; i++) {
                    values += `(${uid},${cid},'${imgUrl[i]}'),`;
                }
                values = values.slice(0,-1);
                sql = `insert into c_user_imgs (user_id,c_id,img) values ${values}`;
                pool.query(sql,(err,ret)=>{
                    if (err)
                        throw err;
                    res.send({code:0,msg:'插入成功',data:[]}); 
                })
            }
        })
    }else{
        res.send({code:-2,msg:'imgUrl必须是一个数组',data:[]});
    }
   
    // pool.query(sql, (err, rs) => {
    //     if (err)
    //         throw err;
    //     res.send

    // });
});
module.exports = router;