<template>
  <div>
    <div class="top-title">
      <h1>{{item.title}}</h1>
      <div class="collect">
        <span style="text-align: center;margin-right:20px;">景点等级:{{item.grade}}A级</span>
        <van-button v-model="collectionNum" @click="change" :class="chge==false?'':'chge'" id="btn">收藏</van-button>
      </div>
    </div>
    <div class="mid-style">
      <div class="mid-praise">
        <div class="item">
          <img src="/images/r1.gif" />
        </div>
        <!-- <div class="item">
          <img src="/images/r2.jpg" />
        </div> -->
        <div class="item num">
          <span>+{{item.comment_num}}</span>
        </div>
        <div class="item text">
          <span>条评论</span>
        </div>
      </div>
    </div>
    <div class="top-img">
      <img :src="item.img" alt />
      <span id="commentNum">{{item.collection_num}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    item:{default:Object}
  },
  data() {
    return {
      chge: false,
      num: 111,
      collectionNum:0
    };
  },
  methods: {
    change() {
      var btn = document.getElementById("btn");
      if (this.chge) {
        this.chge = false;
        btn.innerHTML = "收藏";
        commentNum.innerHTML--;
      } else {
        this.chge = true;
        btn.innerHTML = "取消收藏";
        commentNum.innerHTML++;
      }
      this.collectionNum = parseInt(commentNum.innerHTML);
      console.log(this.collectionNum);
    },
    
  }
};
</script>
<style scoped>
.top-title {
  text-align: center;
}
.collect > button {
  width: 25%;
  background-color: #4e74d8;
  border: 0;
  padding: 3px 5px;
  margin-bottom: 5px;
  border-radius: 31px;
  color: #fff;
  font-size: 12px;
}
.collect > .chge {
  color: #fff;
  background-color: red;
}
.mid-style {
  width: 100%;
  height: 2rem;
  text-align: center;
}
.mid-praise {
  display: flex;
  width:60%;
  border-top: 1px solid #d0cccc;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.mid-praise > div.item {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-top: 0.2rem;
  overflow: hidden;
}
.mid-praise > div.item img {
  width: 100%;
  height: 100%;
}
.mid-praise > .item.num,
.mid-praise > .item.text {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mid-praise > .item.num {
  background-color: #4e74d8;
  color: white;
  text-align: center;
  font-weight: 600;
}
.top-img {
  width: 75%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.top-img > img {
  width: 100%;
  height: 100%;
  border-radius: 0.306667rem;
}
.top-img > span {
  width: 0.7rem;
  padding: 10px 11px;
  background-color: hotpink;
  border-radius: 31px;
  text-align: center;
  color: white;
  font-weight: 600;
  position: absolute;
  top: 13%;
  right: -7.5%;
}
</style>
