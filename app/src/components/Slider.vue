<template>
  <div class="slider">
    <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide" v-for="(item,index) of list" :key="index">
          <div class="img">
            <img :src="item.img" alt />
          </div>
          <div class="text">
            <span v-text="item.city_name"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.swiper-container {
  height: 2.133333rem;
  width: 8.96rem;
}
.swiper-wrapper {
  display: flex;
}
.swiper-slide {
  position: relative;
  width: 3.2rem;
  height: 2.133333rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin-right: .133333rem;
}
.swiper-slide .img {
  width: 100%;
  height: 100%;
}
.swiper-slide .img img {
  width: 100%;
  height: 100%;
  float: left;
   border-radius: 10%;
}
.swiper-slide .text {
    position: absolute;
    font-size: .4rem;
    color: #fff
}
</style>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {
       
    };
  },
  props:{
    list:{default:Object}
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 10,
    //   autoplay: true
    });
  }
};
</script>