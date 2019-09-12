<template>
  <div class="search">
    <div class="input_search">
      <img src="../../public/images/search.png">
      <input type="text" placeholder="搜索目的地">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 搜索样式 */
.input_search {
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
  position: relative;
  left: 0.666667rem;
  top: 0.133333rem;
  width: 0.533333rem;
}
</style>
