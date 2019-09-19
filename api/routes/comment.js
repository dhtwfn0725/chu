const express=require("express")
const router=express.Router();
const pool=require("../pool")

router.get("/",(req,res)=>{
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
ORDER BY
	a.createtime DESC
  `;
  pool.query(sql,(err,rs)=>{
      if(err) throw err;
      res.send(rs);
  })
})

module.exports=router;