<template>
  <div class="index">
    <div class="top-logo">
      <div class="logo">
        <img src="/images/logo.svg" alt />
      </div>
      <div class="title">
        <h2>楚游</h2>
      </div>
      <p class="text">说走就走，就上楚游</p>
    </div>

    <div class="login-btn">
      <span class="iconfont icon-denglu"></span>
      <mt-button class="btn" type="primary" size="large">马上登录</mt-button>
    </div>
    <div class="reg-btn">
      <span class="iconfont icon-zhuce"></span>
      <mt-button class="btn" type="primary" size="large">立即注册</mt-button>
    </div>
    <div class="link">
      <p>
        我已经有一个账户
        <span>现在登录</span>
      </p>
    </div>
  </div>
</template>
<style scoped>
.index {
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.logo {
  text-align: center;
  padding-top: 1.266667rem;
}
.logo img {
  width: 2.333333rem;
}
.title h2 {
  text-align: center;
  font-size: 0.8rem;
}
.text {
  text-align: center;
  font-size: 0.4rem;
  color: #929aa8;
}

.login-btn {
  position: fixed;
  bottom: 5.493333rem;
  width: 100%;
  text-align: center;
}
.reg-btn {
  position: fixed;
  bottom: 3.466667rem;
  width: 100%;
  text-align: center;
}
.reg-btn > span,
.login-btn > span {
  position: absolute;
  left: 1.973333rem;
  top: 0.35rem;
  font-size: 20px;
  color: #fff;
  z-index: 1;
}
.btn {
  display: block;
  width: 7.866667rem;
  margin: 0 auto;
  font-size: 14px;
  height: 1.466667rem;
  border-radius: 1.133333rem;
}
.login-btn .btn {
  background-color: #3364b7;
}
.reg-btn .btn {
  background-color: #5680fa;
}
.btn .mint-button-text {
  display: block;
  font-size: 14px;
}
.link {
  width: 100%;
  position: absolute;
  bottom: 1.653333rem;
  font-size: 12px;
  text-align: center;
}
.link span {
  color: #678bfa;
}
</style>
<script>
export default {
  data() {
    return {};
  }
};
</script>