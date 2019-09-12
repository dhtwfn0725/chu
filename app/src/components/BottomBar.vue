<template>
  <div class="bottom-bar">
    <div class="add">
      <span>+</span>
    </div>
    <mt-tabbar v-model="selected" fixed>
      <router-link to="/">
        <mt-tab-item id="home">
          <img slot="icon" src="/images/home.png" />
        </mt-tab-item>
      </router-link>
      <router-link to="/collect">
        <mt-tab-item id="collect">
          <img slot="icon" src="/images/collection.png" />
        </mt-tab-item>
      </router-link>
      <router-link to="/details">
        <mt-tab-item id="details">
          <img slot="icon" src="/images/xxfl.png" />
        </mt-tab-item>
      </router-link>
      <router-link to="/mine">
        <mt-tab-item id="mine">
          <img slot="icon" src="/images/mine.png" />
        </mt-tab-item>
      </router-link>
    </mt-tabbar>
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

.bottom-bar .mint-tabbar >a {
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
  align-items: center
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