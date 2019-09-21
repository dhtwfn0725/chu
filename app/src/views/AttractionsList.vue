<template>
  <div class="container">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="header_top">
        <h2>景点列表</h2>
      </div>
      <div class="search"  @keyup.enter="init">
        <search></search>
      </div>

      <!-- 上拉加载更多 -->
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="list_body">
          <card-item v-for="(item,index) of datas" :key="index" :item="item"></card-item>
        </div>
      </van-list>

    </van-pull-refresh>
    <div style="width:100%;height:100px;"></div>
    <div class="att_foot">
        <bottom-bar></bottom-bar>
    </div>
  </div>
</template>
<script>
// import attlist from '../assets/json/attlist.json'
import BottomBar from "@/components/BottomBar.vue";
import CardItem from "../components/CardItem.vue";
import Search from "../components/Search.vue";

import Vue from "vue";
import { Loadmore } from "mint-ui";

Vue.component(Loadmore.name, Loadmore);

export default {
  data() {
    return {
      datas: [], //请求数据
      page: 1,
      title: "",
      loading: false,
      finished: false,
      isLoading: false
    };
  },
  components: {
    BottomBar,
    CardItem,
    Search
  },
  methods: {
    // 下拉加载更多数据
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        this.axios
        .get(`/search?title=${this.title}&page=${this.page++}`)
        .then(rs => {
          var rows = this.datas.concat(rs);
          this.datas = rows;
        // 加载状态结束
        this.loading = false;
        if(rs.length==0){
            this.finished = true;
        }
        });
        
      }, 800);
      
    },

    // 上拉刷新
    onRefresh(){
      setTimeout(()=>{
        this.page = 1;
        this.axios
        .get(`/search?title=${this.title}&page=${this.page}`)
        .then(rs => {
          this.datas = rs;
        });
        this.$toast("刷新成功");
        this.isLoading = false;
      },800);
    },
    init(){
      this.page = 1;
      this.title = this.$route.query.keyword==undefined?"":this.$route.query.keyword;
      // console.log(this.title);
      this.axios.get(`/search?title=${this.title}&page=${this.page}`).then(rs=>{
        this.datas = rs;
        console.log(rs);
      });
    },

  },
  created() {
    this.init();
  },
  
}
</script>
<style scoped="scoped">
/* 整体样式 */
.container {
  background-color: #ebecec;
  overflow: hidden;
}
/* 顶部样式 */
.header_top {
  margin-top: 0.266667rem;
  display: flex;
  justify-content: space-between;
  padding-right: 0.533333rem;
  padding-left: 0.533333rem;
}
.header_top>h2{
  box-shadow: 0px 0px 20px 0px black;
  font-family:华文行楷;
  border-radius: 5px;
}
.header_top > span {
  padding-top: 0.133333rem;
}
.mint-header {
  background-color: transparent;
  color: black;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
.search {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>