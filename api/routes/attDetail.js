const express = require("express")
const router = express.Router();
const pool = require("../pool")

router.get("/", (req, res) => {

    var lid = req.query.lid;
    console.log(lid);
    var sql = `
  SELECT
	* 
FROM
	c_scenic_spot 
WHERE
	id = ?
  `;
    pool.query(sql, [lid], (err, rs) => {
        if (err) throw err;
        res.send(rs);
        // console.log(rs[0]);
    })
})

module.exports = router;