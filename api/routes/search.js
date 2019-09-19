const express = require("express")
const router = express.Router();
const pool = require("../pool")

//客户端请求时:
//http://localhost:8081/search?title=公园&page=1
router.get("/", (req, res) => {
    var title = req.query.title;
    var page = req.query.page;
    var pageSize = 5;
    var offset = (page-1) * pageSize;
    //console.log(page);
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