const express = require("express")
const router = express.Router();
const pool = require("../pool")

router.get("/", (req, res) => {
	var lid = req.query.lid;
	// console.log("lid:"+lid);
    var sql = `
	SELECT
	a.id,
	a.content,
	a.img,
	a.scenic_spot_id,
	a.is_delete,
	a.createtime,
	b.nickname,
	b.avatar 
FROM
	c_scenic_comment a
	LEFT JOIN c_user b ON a.user_id = b.id 
WHERE
	a.scenic_spot_id = ? 
ORDER BY
	a.createtime DESC
  `;
    pool.query(sql,[lid], (err, rs) => {
		// console.log(rs.length);
        if (err) 
			throw err;
		if(rs.length>0){
			res.send({code:1,msg:"网友评论：",datas:rs});
		}else{
			res.send({code:-1,msg:"暂无评论"});
		}
        
    })
})

module.exports = router;