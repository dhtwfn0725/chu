<template>
  <div>
    <div class="top-title">
      <h1>凤凰古城</h1>
      <div class="collect">
          <span style="text-align: center;margin-right:20px;">景点等级:5A级</span>
          <button @click="change" :class="chge==false?'':'chge'" id="btn">收藏{{num}}</button>
      </div>
    </div>
    <div class="mid-style">
      <div class="mid_praise">
        <div>
          <img src="/images/r1.gif" alt style="width:100%;border-radius:50%;">
        </div>
        <div>
          <img src="/images/r2.jpg" alt style="width:100%;border-radius:50%;">
        </div>
        <div>+520</div>
        <span>人评论了该景点</span>
      </div>
    </div>
    <div class="top-img">
      <img src="/images/h2.jpg" alt>
      <span class>9.2</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
       chge:false,
       num:111
    }
  },
  methods: {
    change(){
      var btn=document.getElementById("btn");
      if(this.chge){
        this.chge=false;
        btn.innerHTML="收藏"+"("+this.num+")";
      }else{
        this.chge=true;
        btn.innerHTML="已收藏"+"("+this.num+")";
      }
    }
  },
};
</script>
<style scoped>
.top-title {
  text-align: center;
}
.collect>button{
  width:25%;
  background-color:#4e74d8;
  border: 0;
  padding: 3px 5px;
  margin-bottom: 2px;
  border-radius: 31px;
  color: #fff;
  font-size: 12px;
}
.collect>.chge{
  color: #fff;
  background-color: red;
}
.mid-style {
  width: 100%;
  height: 2rem;
  text-align: center;
}
.mid_praise {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 60%;
  height: 90%;
  border-top: 1px solid #d0cccc;
  text-align: center;
  align-items: center;
  margin: 0 auto;
}
.mid_praise > div {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-top: 0.2rem;
}
.mid_praise > :nth-child(3) {
  border-radius: 50%;
  background-color: #4e74d8;
  color: white;
  text-align: center;
  line-height: 350%;
  font-weight: 600;
}
.mid_praise > span {
  margin-top: 10px;
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
