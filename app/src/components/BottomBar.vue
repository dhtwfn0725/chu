<template>
  <div class="bottom-bar">
    <div class="add">
      <span>+</span>
    </div>
    <van-tabbar route>
      <van-tabbar-item to="/" icon="shop">首页</van-tabbar-item>
      <van-tabbar-item to="/attlist" icon="point-gift">列表</van-tabbar-item>
      <van-tabbar-item to="/collection" icon="like">收藏</van-tabbar-item>
      <van-tabbar-item to="/my" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style scoped>
.bottom-bar .add {
  width: 1.226667rem;
  height: 1.226667rem;
  background-color: #5680fa;
  border-radius: 50%;
  color: #fff;
  position: fixed;
  bottom: 0.666667rem;
  z-index: 99;
  left: 50%;
  margin-left: -0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
}
.bottom-bar .mint-tabbar {
  height: 1.333333rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bottom-bar .mint-tabbar > a {
  display: block;
  width: 25%;
  height: 100%;
}

.mint-tab-item {
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
<script>
import { log } from "util";
export default {
  data() {
    return {
      selected: "home"
    };
  },
  methods: {}
};
</script>