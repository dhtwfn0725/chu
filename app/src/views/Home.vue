<template>
  <div class="home">
    <h1 class="title">楚游，说走就走的旅行</h1>
    <div class="search">
      <span></span>
      <input type="text" placeholder="搜索目的地" />
    </div>
    <div class="slider">
      <slider></slider>
    </div>
    <div class="hot-title">
      <h2>热门景点</h2>
      <span class="more">查看所有</span>
    </div>
    <div class="card-list">
      <div class="card-item"></div>
      <div class="card-item"></div>
      <div class="card-item"></div>
      <div class="card-item"></div>
      <div class="card-item"></div>
      <div class="card-item"></div>
      <div class="card-item"></div>
    </div>
    <div class="bar">
      <bottom-bar></bottom-bar>
    </div>
  </div>
</template>
<style scoped>
.home h1.title {
  font-size: 0.64rem;
  font-weight: 600;
  line-height: 1;
  margin: 0;
  padding: 0.72rem 0;
  padding-left: 0.4rem;
}
.home .search {
  width: 8.906667rem;
  height: 1.44rem;
  line-height: 1.44rem;
  background-color: #fff;
  margin: 0 auto;
  border: 1px solid #e5e5e5;
  margin-bottom: 0.773333rem;
  overflow: hidden;
  box-sizing: border-box;
  padding-left: 1.28rem;
  border-radius: 0.666667rem;
}
.home .search input {
  border: 0;
  display: block;
  height: 100%;
  width: 100%;
  font-size: 0.426667rem;
}
.hot-title {
  width: 8.853333rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.hot-title .more {
  color: #4a90e2;
}
.card-list {
  width: 8.933333rem;
  margin: 0 auto;
}
.card-item {
  width: 8.933333rem;
  height: 5.333333rem;
  background-color: pink;
  margin-bottom: .533333rem;
}
</style>
<script>
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import BottomBar from "@/components/BottomBar.vue";

export default {
  name: "home",
  components: {
    Slider,
    BottomBar
  }
};
</script>
