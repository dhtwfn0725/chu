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
import { log } from "util";

export default {
  name: "home",
  components: {
    MainItem,
    BottomBar
  },
  data() {
    return {
      testData:[]
    };
  },
  methods: {
    test() {
      this.axios.get('/spotlist?city=武汉&page=1').then(response => {
        this.testData = response;
      });
    }
  },
  created() {
    this.test();
  }
};
</script>
