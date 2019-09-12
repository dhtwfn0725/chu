<template>
  <div class="home">
    <main-item></main-item>
    <div class="bar">
      <bottom-bar></bottom-bar>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
// @ is an alias to /src

import MainItem from "@/components/Main.vue";
import BottomBar from "@/components/BottomBar.vue";

export default {
  name: "home",
  components: {
    MainItem,
    BottomBar
  },
  data() {
    return {
      
    };
  },
  methods: {}
};
</script>
