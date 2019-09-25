<template>
  <div class="container">
    <!-- 头像部分 -->
    <div class="head">
      <div class="head_pic">
        <img :src="uhead" class="head_img" />
      </div>
      <div class="head_text" v-if="show">
        <span class="head_id">{{uid}}</span>
        <span class="head_email">{{uemail}}</span>
      </div>
      <div class="head_text" v-else @click="jumpLogin">
        <span class="head_id">请点击此处进行登录</span>
        <span class="head_email">当前状态未登录</span>
      </div>
    </div>
    <!-- 卡片部分 -->
    <div class="middle">
      <div class="card">
        <div class="card_item">
          <div>{{pics}}</div>
          <div>照片</div>
        </div>
        <div class="card_item">
          <div>{{disc}}</div>
          <div>评论</div>
        </div>
        <div class="card_item">
          <div>{{atte}}</div>
          <div>关注</div>
        </div>
      </div>
    </div>
    <!-- 相册 -->
    <div class="album">
      <div class="album-item" v-for="(item,index) in data" :key="index">
        <div class="album_pic">
          <router-link :to="{path:'/myAlbum',query:{cid:`${item.id}`}}">
            <img :src="item.img" class="album_img" style="object-fit: cover" />
          </router-link>
        </div>
        <div class="album_name">{{item.name}}</div>
      </div>
    </div>
    <!-- 占位div -->
    <div class="zhan"></div>
    <div>
      <bottom-bar></bottom-bar>
    </div>
  </div>
</template>
<script>
import BottomBar from "../components/BottomBar.vue";

export default {
  data() {
    return {
      albums: {},
      pics: "0",
      disc: "0",
      atte: "0",
      // data 留空
      data: [],
      uid: "",
      uemail: "",
      uhead: "/images/my_head.png",
      show: false
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      var res = sessionStorage.getItem('user');
      
      if (res != null) {
        res = JSON.parse(res);
        this.pics = res.pic_num;
        this.disc = res.comment_num;
        this.atte = res.collect_num;
        this.data = res.result;
        this.uid = res.user.nickname;
        this.uemail = res.user.email;
        this.uhead = res.user.avatar;
        this.show = true;
      } else {
        this.$messagebox("消息", "亲，请先登录呢~");
      }
    },
    toAlbum() {
      this.$router.push("/myAlbum");
    },
    jumpLogin() {
      this.$router.push("/login");
    }
  },
  components: {
    BottomBar
  }
};
</script>
<style scoped>
.container {
  background-color: #f0f8ff1a;
  overflow: hidden;
  min-height: 100vh;
}
/* 头像部分 */
.head {
  height: 7.733333rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.head_pic {
  width: 3.866667rem;
  height: 3.866667rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 15px 8px #e6e6e6;
}
.head_img {
  width: 3.866667rem;
}
.head_text {
  text-align: center;
  margin-top: 0.67rem;
}
.head_id,
.head_email {
  display: block;
  height: 0.706667rem;
}
.head_id {
  font: bold 0.533333rem "幼圆", "微软雅黑", "宋体";
  margin-bottom: 0.15rem;
}
.head_email {
  font: 0.333333rem "Candara", "my_boli", "Constantia";
  margin-bottom: 0.7rem;
}
/* 中间卡片部分 */
.middle {
  height: 2rem;
  margin-bottom: 0.666667rem;
}
.card {
  text-align: center;
  height: 1.933333rem;
  width: 8.933333rem;
  margin: 0 auto;
  background-color: #fefefe;
  border-radius: 12px;
  box-shadow: 0 0 6px 2px #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.card_item > div:first-child {
  font: bold 20px "my_boli";
  margin-bottom: 0.066667rem;
}
.card_item > div:last-child {
  font: 15px "华文宋体", "新宋体";
}
/* 相册部分 */
.album {
  padding: 0 0.533333rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.album_pic {
  width: 4.3rem;
  height: 3.85rem;
  box-shadow: 0 0 10px 2px #e6e6e6;
  border-radius: 15px;
  overflow: hidden;
}
.album_img {
  width: 100%;
  height: 100%;
  background: #000;
}
.album_name {
  margin: 0.45rem 0.05rem;
  font: bold 20px "华文新魏", "华文宋体", "新宋体";
}
.zhan {
  height: 1.25rem;
}
</style>
