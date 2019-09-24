<template>
  <div class="login">
    <div class="title">
      <p>楚游，说走就走</p>
      <p>请输入您的登录信息</p>
    </div>
    <div class="form">
      <van-field
        v-model="uname"
        class="uname"
        label-width="50"
        left-icon="manager"
        label="用户名"
        placeholder="请输入用户名"
        required
      />
      <van-field
        v-model="upwd"
        class="upwd"
        label-width="50"
        left-icon="eye"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <div class="submit" @click="login">
        <span>登 录</span>
      </div>
      <div class="bottom">
        <p>
          没有账号吗？
          <router-link to="/reg">
            <span style="color:#83a0fa">立即注册</span>
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
    login() {
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
          "user/login",
          qs.stringify({
            uname: this.uname,
            upwd: this.upwd
          })
        )
        .then(rs => {
          // console.log(rs);
          if (rs.code == 1) {
            this.$router.push({ path: "/" });
          }
          this.$toast(rs.msg);
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
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-color: #f00; */
  background: url("/images/login_bg.png") no-repeat center;
  background-size: cover;
}
.title {
  text-align: center;
  font-size: 18px;
  color: #fff;
  margin-bottom: 0.4rem;
}
.form {
  width: 85%;
  margin: 0 auto;
}
.uname {
  margin-bottom: 0.466667rem;
}
.uname .van-icon,
.upwd .van-icon {
  color: #2d3496;
}
.submit span {
  display: block;
  width: 100%;
  margin-top: 0.466667rem;
  background-color: #6c55ff;
  height: 1.173333rem;
  line-height: 1.173333rem;
  text-align: center;
  font-size: 16px;
  color: #fff;
}
.bottom {
  color: #fff;
  text-align: center;
}
</style>