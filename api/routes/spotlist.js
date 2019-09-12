const express = require("express")
const router = express.Router();
const pool = require("../pool")

//app.use("/details",Details)
//服务端接口地址http://localhost:3000/details
//客户端请求时:
//http://localhost:3000/details?lid=1
router.get("/", (req, res) => {
    var city = req.query.city;
    var page = req.query.page;
    if (city === undefined) city = '武汉';

    var sql1 = `select id from c_city where city_name = ? limit 1`;
    pool.query(sql1, [city], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        let city_id = result[0].id;
        let pageSize = 10;
        let offset = (page -1 ) * pageSize;

        let sql = `select * from c_scenic_spot where city_id = ? limit ?,?`;
        pool.query(sql, [city_id,offset,pageSize], (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
            res.send(result);
        })
  })
})

module.exports = router;