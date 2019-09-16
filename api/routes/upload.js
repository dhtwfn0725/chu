const express = require('express');
const pool = require('../pool');
const router = express.Router();
var multer = require('multer')
var upload = multer({ dest: '../uploads/' })
// 注册路由
router.post('/', upload.array('photos', 12), function (req, res, next) {
    // req.files 数组类型，包含多个file
    // req.body 将具有文本域数据，如果存在的话

    console.log(req.files)
})
module.exports = router;