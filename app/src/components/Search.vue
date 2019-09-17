<template>
  <div class="search">
    <div class="input_search">
      <img src="images/search.png" @click="search">
      <input type="text" v-model="keyword" placeholder="搜索景点名称">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      keyword:''
    }
  },
  methods:{
    search(){
      if(this.keyword == ''){
        this.$toast('请输入景点名称关键字');
        return;
      }
    }
  }
};
</script>

<style scoped>
/* 搜索样式 */
.search {
  display: flex;
  justify-content: space-around
}
.input_search {
  position: relative;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
}
.input_search input {
  padding-left: 0.666667rem;
  padding-top: 3%;
  padding-bottom: 3%;
  border: 1px solid #ccc;
  border-radius: 0.266667rem;
  width: 8.133333rem;
}
.input_search img {
  position: absolute;
  right:  0.6rem;
  top: 0.3rem;
  width: 0.533333rem;
}
</style>
