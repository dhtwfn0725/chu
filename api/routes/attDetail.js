const express=require("express")
const router=express.Router();
const pool=require("../pool")

router.get("/",(req,res)=>{
  var jdid = req.query.jdid;
  console.log(jdid);
  var sql = `
  SELECT
  * 
FROM
  c_scenic_spot 
WHERE
  id = ?
  `;
  pool.query(sql,[jdid],(err,rs)=>{
      if(err) throw err;
      res.send(rs);
  })
})

module.exports=router;