<template>
  <div class="login">
    <div class="top">
      <h2>欢迎回来</h2>
      <p>请在下方输入你的登录凭证</p>
    </div>
    <div class="form">
      <div class="section">
        <div class="uname">
          <label>用户名</label>
          <input type="text" placeholder="请填写用户名" v-model="uname">
        </div>
        <div class="upwd">
          <label>密码</label>
          <input type="password" placeholder="请填写密码" v-model="upwd">
          <span style="color:#83a0fa">忘记</span>
        </div>
        <div class="submit">
          <span @click="login">登录</span>
        </div>
      </div>

      <div class="bottom">
        <p>
          没有账号吗？
          <span style="color:#83a0fa">立即注册</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data() {
    return {
      uname:"",
      upwd:""
    }
  },
  methods: {
    login(){
      var $uname = this.uname;
      var $upwd = this.upwd;
      // console.log($uname);
      // console.log($upwd);
      var reg = /^[a-z0-9]{3,12}$/i;
      if(!reg.test($uname)){
        this.$toast("用户名格式不正确");
        return;
      }
      if(!reg.test($upwd)){
        this.$toast("密码格式不正确");
        return;
      }
      this.axios.post("user/login",qs.stringify({
        uname:this.uname,
        upwd:this.upwd
      })).then(rs=>{
        // console.log(rs);
        if(rs.code==1){
          this.$router.push({path:"attlist"});
        }
        this.$toast(rs.msg);
      }).catch(err=>{
        throw err;
      })

    }
  },
  created() {
    
  },
}
</script>
<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  /* background: url('/images/bg.jpg') */
}
.top {
  margin-top: 0.4rem;
}
.top > h2 {
  text-align: center;
  font-size: 0.6rem;
}
.top > p {
  color: #80899a;
  text-align: center;
}
.form {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.section {
  box-sizing: border-box;
  width: 8.88rem;
  background-color: #fff;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0.506667rem;
  position: absolute;
  z-index: 1;
  top: -4.333333rem;
  border-radius: 0.233333rem;
}
.form .uname,
.form .upwd {
  padding-top: 8px;
  display: flex;
  flex-direction: column;
}

.form .uname > input,
.form .upwd > input {
  border:none;
  outline: none;
  height: 1.2rem;
  line-height: 1.2rem;
  border-bottom: .013333rem solid #ccc; 
}
.form .uname > label,
.form .upwd > label {
  font-size: 0.4rem;
  font-weight: 600;
}
.form .submit {
  margin-top: 0.466667rem;
}
.form .submit span {
  position: absolute;
  width: 7.866667rem;
  text-align: center;
  background-color: #5680fa;
  color: #fff;
  border-radius: 0.8rem;
  height: 1.466667rem;
  line-height: 1.466667rem;
}
.form .bottom {
  width: 100%;
  background-color: #f2f2f2;
  text-align: center;
  height: 5.2rem;
  position: relative;
}

.form .bottom p {
  position: absolute;
  bottom: 0.666667rem;
  width: 100%;
  text-align: center;
}

.form >>> .mint-cell-wrapper {
  background-image: none;
}
.form >>> .mint-cell:last-child {
  background-image: none;
}
</style>