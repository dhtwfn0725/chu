const express = require("express")
const router = express.Router();
const pool = require("../pool")

router.get("/", (req, res) => {
    var uid = req.session.uid;
    // console.log(uid);
    if (!uid) {
        res.send({code:-1,msg:"请先登录"});
        return;
    }

    var page = req.query.page;
    var pageSize = 5;
    var offset = (page-1) * pageSize;
    // console.log(page);
    var sql = `select a.id,a.title,a.img,a.city_id,a.grade,b.user_id,b.spot_id from c_scenic_spot a left join c_collect b on a.id=b.spot_id where 
    b.user_id=?  limit ${offset},${pageSize}`;
    pool.query(sql,[uid],(err, result) => {
        if (err) throw err;
        if(result.length==0){
            res.send({code:-2,msg:"找到0条相关收藏记录"})
        }else{
            res.send({code:1,msg:`找到${result.length}条相关收藏记录`,data:result});
        }
  })
})

module.exports = router;