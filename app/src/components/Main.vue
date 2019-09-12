<template>
  <div class="main-item">
    
    <h1 class="title">楚游，说走就走的旅行</h1>
    <div class="search">
      <span class="iconfont iconsousuo">
  
      </span>
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
  </div>
</template>
<style scoped>
.main-item h1.title {
  font-size: 0.64rem;
  font-weight: 600;
  line-height: 1;
  margin: 0;
  padding: 0.72rem 0;
  padding-left: 0.4rem;
}
.main-item .search {
  position: relative;
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
.main-item .search > span {
  position: absolute;
  width: 0.48rem;
  height: 0.48rem;
  left: .586667rem;
  font-size: .426667rem;
  color: #4a90e2;
  font-weight: 700
}
.main-item .search input {
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
  margin-bottom: 0.533333rem;
}
</style>
<script>
import Slider from "@/components/Slider.vue";
export default {
  components: {
    Slider
  }
};
</script>