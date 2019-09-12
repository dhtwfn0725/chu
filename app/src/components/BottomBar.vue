<template>
  <div class="bottom-bar">
    <div class="add">
        <span>+</span>
    </div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img slot="icon" src="/images/home.png" />
      </mt-tab-item>
      <mt-tab-item id="collect">
        <img slot="icon" src="/images/collection.png" />
      </mt-tab-item>
      <mt-tab-item id="details">
        <img slot="icon" src="/images/xxfl.png" />
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="/images/mine.png" />
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style scoped>
.bottom-bar .add {
    width: 1.226667rem;
    height: 1.226667rem;
    background-color: #5680fa;
    border-radius: 50%;
    color:#fff;
    position: fixed;
    bottom: .666667rem;
    z-index: 99;
    left: 50%;
    margin-left: -0.6rem;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:.8rem
}
.bottom-bar .mint-tabbar {
  height: 1.333333rem;
}
</style>
<script>
export default {
  data() {
    return {
      selected: "home"
    };
  }
};
</script>