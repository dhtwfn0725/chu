<template>
  <div id="detail">
    <detailspic></detailspic>
    <van-tabs v-model="active" id="bg">
      <van-tab title="景点介绍">
        <div id="main" class="main">
          <div
            class="mid-title"
          >凤凰古城，建于清康熙四十三年（1704年）。距铜仁凤凰机场27公里，怀化芷江机场57公里，张家界荷花机场280公里；G209国道与S308省道贯穿全境，枝柳铁路穿境而过。凤凰古城与吉首的德夯苗寨、永顺的猛洞河、贵州的梵净山相毗邻，是怀化、吉首、贵州铜仁三地之间的必经之路。是湖南十大文化遗产之一，曾被新西兰作家路易·艾黎称赞为中国最美丽的小城，与云南丽江古城、山西平遥古城媲美，享有“北平遥、南凤凰”之名。是国家历史文化名城，国家AAAA级景区。</div>
          <div class="bottom-btn" @click="showImg">景点图片阅览</div>
          <div class="jdyl">
            <van-image-preview v-model="show" :images="images" @change="onChange">
              <template v-slot:index>第{{ index }}页</template>
              111
            </van-image-preview>
          </div>
        </div>
      </van-tab>
      <van-tab title="景点评论">
        <div class="comment">
          <div class="top-font">网友评论：</div>
          <detailslist v-for="(item,index) of num" :key="index" class="footer-margin"></detailslist>
          <detailsupload></detailsupload>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import DetailsList from "../components/DetailsList.vue";
import DetailsPic from "../components/DetailsPic.vue";
import DetailsUpload from "../components/DetailsUpload.vue";
import Vue from "vue";
import { ImagePreview } from "vant";

export default {
  data() {
    return {
      active: 0,
      num: 5,
      show: false,
      index: 0,
      images: ["images/h1.jpg", "images/h2.jpg"]
    };
  },
  components: {
    detailslist: DetailsList,
    detailspic: DetailsPic,
    detailsupload: DetailsUpload
  },
  methods: {
    onChange(index) {
      this.index = index;
    },
    showImg() {
      Vue.use(ImagePreview);
      ImagePreview({
        images: ["images/h1.jpg", "images/h2.jpg"],
        startPosition: 1,
        onClose() {
          // do something
        }
      });
    }
  }
};
</script>
<style scoped>
#detail {
  background-color: #ebecec !important;
  padding-top: 0.133333rem;
}
#main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 1.15rem;
}
.mid-title,.comment {
  width: 9.6rem;
  box-sizing: border-box;
  padding: 0.2rem;
  background: #fff;
  font-size: 12px;
  line-height: 24px;
  padding-bottom: 1.2rem;
  border-radius: 0.133333rem;
  margin: 0 auto;
}
.mid-title {
  text-indent: 2em;
}
.bottom-btn {
  position: fixed;
  width: 100%;
  height:1.2rem;
  line-height: 1.2rem;
  color: #fff;
  font-size: 16px;
  text-align: center;
  background-color: #4e74d8;
  bottom: 0;
  left: 0;
  z-index: 9;
}

.top-font {
  font-size: 16px;
  font-weight: 500;
}
.collect {
  display: flex;
  flex-wrap: nowrap;
  width: 90%;
  margin-top: 0.5rem;
}
.collect > span {
  display: inline-block;
  width: 50%;
  font-size: 25px;
  text-align: center;
  color: #4e74d8;
}
.van-tabs >>> .van-tabs__wrap > .van-tabs__nav {
  background-color: #ebecec;
}
</style>
