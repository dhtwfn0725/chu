<template>
  <div id="detail">
     <detailspic></detailspic>
    <van-tabs v-model="active" id="bg">
      <van-tab title="景点介绍">
        <div id="main" class="main">
          <div class="mid-title">
            <span>位于湖南省湘西土家族苗族自治州的西南部，由苗族、汉族、土家族等28个民族组成</span>
            <span>是中国西南文物建筑最多的县份。城内还有古色古香的石板街道200多条</span>
          </div>
          <div class="jdyl">
            <button class="btn" @click="showImg">景点阅览</button>
            <van-image-preview
              v-model="show"
              :images="images"
              @change="onChange">
              <template v-slot:index>第{{ index }}页</template>
              111
            </van-image-preview>
          </div>
        </div>
      </van-tab>
      <van-tab title="景点评论">
        <div id="top-font">网友评论：</div>
        <detailslist v-for="(item,index) of num" :key="index" class="footer-margin"></detailslist>
        <detailsupload></detailsupload>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import DetailsList from "../components/DetailsList.vue";
import DetailsPic from "../components/DetailsPic.vue";
import DetailsUpload from "../components/DetailsUpload.vue"
import Vue from 'vue'
import { ImagePreview } from 'vant';


export default {
  data() {
    return {
      active: 0,
      num: 5,
      show:false,
      index: 0,
      images:['images/h1.jpg','images/h2.jpg'],
    };
  },
  components: {
    detailslist: DetailsList,
    detailspic: DetailsPic,
    detailsupload:DetailsUpload
  },
  methods: {
    onChange(index) {
      this.index = index;
    },
    showImg(){
      Vue.use(ImagePreview);
      ImagePreview({
        images: [
          'images/h1.jpg','images/h2.jpg'
        ],
        startPosition: 0,
        onClose() {
          // do something
        }
      });
    }
  },
};
</script>
<style scoped>
#detail {
  background-color: #ebecec !important;
  padding-top:1rem; 
}
#main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 1.15rem;
}
.mid-title {
  width: 85%;
  height: 5rem;
  background: #fff;
  font-size: 12px;
  border-radius: 0.306667rem;
  text-align: center;
  margin-top: 0.1rem;
  position: relative;
  z-index: 2;
}
.mid-title > span {
  display: inline-block;
  width: 80%;
  text-align: center;
  margin: 0 auto;
  margin-top: 0.666667rem;
}
.btn {
  font-size: 20px;
  margin-top: -0.5rem;
  width: 8rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  border-radius: 34px;
  background-color: #4e74d8;
  color: white;
  border: 0;
  position: relative;
  z-index: 5;
}
#top-font {
  margin-left: 1.6667rem;
  font-size: 25px;
  font-weight: 500;
}
.footer-margin {
  margin-top: 0.5px;
}
.collect{
  display: flex;
  flex-wrap: nowrap;
  width:90%;
  margin-top: 0.5rem;
}
.collect>span{
  display: inline-block;
  width:50%;
  font-size: 25px;
  text-align: center;
  color: #4e74d8;
}
.van-tabs >>> .van-tabs__wrap>.van-tabs__nav{
  background-color: #ebecec; 
}
</style>
