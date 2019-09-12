const express = require("express")
const router = express.Router();
const pool = require("../pool")

//app.use("/details",Details)
//服务端接口地址http://localhost:3000/details
//客户端请求时:
//http://localhost:3000/details?lid=1
router.get("/", (req, res) => {
    var title = req.query.title;
    var page = req.query.page;
    var pageSize = 10;
    var offset = (page-1) * pageSize;
    var sql1 = `select * from c_scenic_spot where title like "%${title}%" limit ${offset},${pageSize}`;
    pool.query(sql1,(err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.send(result);  
  })
})

module.exports = router;