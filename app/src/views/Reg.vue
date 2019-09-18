<template>
  <div class="login">
    <div class="top">
      <h2>欢迎注册</h2>
      <p>请在下方输入你的注册信息</p>
    </div>
    <div class="form">
      <div class="section">
        <van-cell-group>
          <van-field v-model="uname" required clearable label="用户名" placeholder="请输入用户名" />
          <van-field v-model="upwd" type="password" label="密码" placeholder="请输入密码" required />
        </van-cell-group>
        <div class="submit" @click="reg">
          <span>注 册</span>
        </div>
      </div>

      <div class="bottom">
        <p>
          已有账号，
          <router-link to="/login">
          <span style="color:#83a0fa">立即登录</span>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
      uname: "",
      upwd: ""
    };
  },
  methods: {
    reg() {
      var $uname = this.uname;
      var $upwd = this.upwd;
      // console.log($uname);
      // console.log($upwd);
      var reg = /^[a-z0-9]{3,12}$/i;
      if (!reg.test($uname)) {
        this.$toast("用户名格式不正确");
        return;
      }
      if (!reg.test($upwd)) {
        this.$toast("密码格式不正确");
        return;
      }
      this.axios
        .post(
          "/reg",
          qs.stringify({
            uname: this.uname,
            upwd: this.upwd
          })
        )
        .then(rs => {
          this.$toast(rs.msg);
          if (rs.code == 0) {
            this.$router.push({ path: "/login" });
          } 
        })
        .catch(err => {
          throw err;
        });
    }
  },
  created() {}
};
</script>
<style scoped>
.login {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
.submit {
  width: 100%;
  color: #fff;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  font-size: 14px;
  background-color: #83a0fa;
}
.bottom {
  text-align: center;
}
</style>