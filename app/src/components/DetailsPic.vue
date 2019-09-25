<template>
  <div>
    <div class="top-title">
      <h1>{{item.title}}</h1>
      <div class="collect">
        <span style="text-align: center;margin-right:20px;">景点等级:{{item.grade}}A级</span>
        <van-button
          v-model="collectionNum"
          @click="change"
          :class="chge==false?'':'chge'"
          id="btn"
        >{{text}}</van-button>
      </div>
    </div>
    <div class="mid-style">
      <div class="mid-praise">
        <div class="item">
          <img src="/images/r1.gif" />
        </div>
        <!-- <div class="item">
          <img src="/images/r2.jpg" />
        </div>-->
        <div class="item num">
          <span>+{{commentNum}}</span>
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
  props: {
    item: { default: Object },
    commentNum: { default: 0 }
  },
  data() {
    return {
      chge: false,
      num: 111,
      collectionNum: 0,
      text: "收藏",
      act: "add",
      user: null
    };
  },
  created() {
    
  },
  watch:{
     item:function(){
       this.init();
     }
  },
  methods: {
    init() {
      var sid = this.item.id;
      this.user = sessionStorage.getItem("user");

      if (this.user != null) {
        var { collect_list } = JSON.parse(this.user);

        if (collect_list.indexOf(sid) != -1) {
          this.chge = true;
          this.text = "取消收藏";
          this.act = "cancle";
        }
      }
    },
    change() {
      if (this.user == null) {
        this.$messagebox("消息", "亲，请先登录呢~");
        return;
      }
      // 请求后端接口
      var url = `/changeCollection?act=${this.act}&sid=${this.item.id}`;
      this.axios.get(url).then(res => {
        if (res.code == 0) {
          this.$messagebox(res.msg);
          if (this.act == "cancle") {
            // 取消
            this.chge = false;
            this.text = "收藏";
            this.act = "add";
            this.item.collection_num--;
          } else {
            this.chge = true;
            this.text = "取消收藏";
            this.act = "cancle";
            this.item.collection_num++;
          }
        } else {
          this.$messagebox(res.msg);
        }
      });
    }
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
  width: 60%;
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
