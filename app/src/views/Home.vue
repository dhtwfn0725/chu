<template>
  <div class="home">
    <h1 class="title">楚游，说走就走的旅行</h1>
    <div class="search">
      <span></span>
      <input type="text" placeholder="搜索目的地">
    </div>
    <div class="slider">
       <slider></slider>
    </div>
  </div>
</template>
<style scoped>
  .home h1.title {
    font-size: .64rem;
    font-weight: 600;
    line-height: 1;
    margin: 0;
    padding: .72rem 0;
    padding-left: .4rem;
  }
  .home .search {
    width: 8.906667rem;
    height: 1.44rem;
    line-height: 1.44rem;
    background-color: #fff;
    margin: 0 auto;
    border: 1px solid #e5e5e5;
    margin-bottom: .773333rem;
    overflow: hidden;
    box-sizing: border-box;
    padding-left: 1.28rem;
    border-radius: .666667rem;
    
  }
  .home .search input {
    border: 0;
    display: block;
    height: 100%;
    width: 100%;
    font-size: .426667rem;
  }
</style>
<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'

export default {
  name: 'home',
  components: {
    Slider
  }
}
</script>
