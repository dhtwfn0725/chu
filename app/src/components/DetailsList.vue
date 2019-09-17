<template>
  <div class="comment-card">
    <div id="main" class="item-box">
      <div class="user">
        <div class="avatar">
          <img src="/images/r1.gif" style="width:100%;border-radius:50%;" />
        </div>
        <div class="uname">
            <span>爱吃草的牛:</span>            
        </div>
      </div>
      <div class="content">
          这里的风景真的很不错啊,早点来就好了啊，下次还来这里玩吗？
      </div>
      <div class="pic">
        <img src="/images/h2.jpg" />
        <img src="/images/h1.jpg" />
        <img src="/images/h1.jpg" />
        <img src="/images/h1.jpg" />
        <img src="/images/h1.jpg" />
      </div>
      <div class="date">
          <span>2019-09-17 12:12:12</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.item-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px dashed #ccc;
  padding: .2rem 0;
}
.item-box .user {
    display:flex;
    align-items: center;
}
.item-box .user .avatar {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: .2rem;
}
.item-box .content {
    font-size: 12px;
    line-height: 22px;
}
.item-box .pic {
    box-sizing: border-box;
    padding: .133333rem;
    display: flex;
    flex-wrap: wrap;
}
.item-box .pic img {
    width: 2.666667rem;
    height: 1.733333rem;
    margin-right: .2rem;
    margin-bottom: .2rem;
    border-radius: .133333rem
}
.item-box .date {
    align-self: flex-end
}
</style>
