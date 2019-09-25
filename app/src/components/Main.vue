<template>
  <div class="main-item">
    <h1 class="title">楚游，说走就走的旅行</h1>
    <div class="search">
      <search></search>
    </div>
    <div class="slider">
      <slider :list="cityList"></slider>
    </div>
    <div class="hot-title">
      <h2>热门景点</h2>
      <router-link to="/attlist">
        <span class="more">查看所有</span>
      </router-link>
    </div>
    <div class="card-list">
      <van-list :finished="finished" v-model="loading" direction="down" @load="onLoad">
        <card-item
          v-for="(item,index) of list"
          :item="item"
          :key="index"
        ></card-item>
      </van-list>
    </div>
  </div>
</template>
<style scoped="scoped">
.main-item h1.title {
  font-size: 0.64rem;
  font-weight: 600;
  line-height: 1;
  margin: 0;
  padding: 0.72rem 0 0.72rem 0.4rem;
}
/* .main-item .search {
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
} */
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
  margin: 0 auto 1.6rem;
}
</style>
<script>
import Slider from "@/components/Slider.vue";
import CardItem from "@/components/CardItem.vue";
import Search from "@/components/Search.vue";
// import attlist from '../assets/json/attlist.json'

export default {
  components: {
    Slider,
    CardItem,
    Search
  },
  data() {
    return {
      list: [],
      page: 0,
      loading: false,
      finished: false,
      cityList: []
    };
  },
  methods: {
    getList() {
      this.page++;
      let url = "/hot?page=" + this.page;
      this.axios.get(url).then(res => {
        if (res.data.length == 0) {
          this.finished = true;
          return;
        }
        this.list = this.list.concat(res.data);
        this.loading = false;
      });
    },
    onLoad() {
      this.getList();
    },
    getCityList() {
      let url = "/city";
      this.axios.get(url).then(res => {
        this.cityList = this.cityList.concat(res.data);
      });
    }
  },
  created() {
      this.getCityList();
  }
};
</script>