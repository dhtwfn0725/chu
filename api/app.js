//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const session = require('express-session');

const loginRouter = require('./routes/login');

// 景点列表

const spotList = require('./routes/spotlist');
const spotdetail = require('./routes/spotdetail');
const search = require('./routes/search');
const my = require('./routes/my');
const reg = require('./routes/reg');
const imglist = require('./routes/imglist');
const hot = require('./routes/hot');
const city = require('./routes/city');
// 创建服务器
var server = express();
server.listen(8081);

// 将session加密
server.use(session({ secret: "128位字符串", resave: true, saveUninitialized: true }));

// 跨域处理
server.use(cors({
    origin: [
        "http://127.0.0.1:5500", "http://localhost:8080"
    ], //不能用*
    credentials: true
}));

//使用body-parser中间件
server.use(bodyParser.urlencoded({ extended: false }));

// 配置静态资源目录 server.use(express.static("public"));

// 测试
server.use("/user", loginRouter);
server.use("/spotlist", spotList);
server.use("/spotdetail", spotdetail);
server.use("/search", search);
server.use("/my", my);
server.use("/reg", reg);
server.use("/imglist", imglist);
server.use("/hot", hot);
server.use("/city", city);

var multer = require('multer')
const storage = multer.diskStorage({
    // destination:'public/uploads/'+new Date().getFullYear() + (new Date().getMonth()+1) + new Date().getDate(),
    destination(req, res, cb) {
        cb(null, 'images/');
    },
    filename(req, file, cb) {
        const filenameArr = file.originalname.split('.');
        cb(null, Date.now() + '.' + filenameArr[filenameArr.length - 1]);
    }
});
var upload = multer({ storage })
server.post('/upload', upload.array('photos', 5), function (req, res, next) {
    res.send({ code: 0, msg: '上传成功' ,data:req.files});
})
