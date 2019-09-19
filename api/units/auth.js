var Auth = function (req, res, next) {
    if(req.session.uid == null){
        res.send({code:-1,msg:'没有登录',data:[]}).end();
    }else{
        next();
    }
}
module.exports = Auth;