<template>
  <div class="comment-card">
    <div id="main" class="item-box">
      <div class="user">
        <div class="avatar">
          <img :src="`${item.avatar}`" style="width:100%;border-radius:50%;" />
        </div>
        <div class="uname">
          <span>{{item.nickname}}：</span>
        </div>
      </div>
      <div class="content">{{item.content}}</div>
      <div class="pic" v-for="(img,index) in imgs" :key="index">
        <img :src="img">
      </div>
      <div class="date">
        <span>{{item.createtime}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: { default: Object },
    imgs:{default:""}
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.item-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px dashed #ccc;
  padding: 0.2rem 0;
}
.item-box .user {
  display: flex;
  align-items: center;
}
.item-box .user .avatar {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.2rem;
}
.item-box .content {
  font-size: 12px;
  line-height: 22px;
}
.item-box .pic {
  box-sizing: border-box;
  padding: 0.133333rem;
  display: flex;
  flex-wrap: wrap;
}
.item-box .pic img {
  width: 2.666667rem;
  height: 1.733333rem;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  border-radius: 0.133333rem;
}
.item-box .date {
  align-self: flex-end;
}
</style>
