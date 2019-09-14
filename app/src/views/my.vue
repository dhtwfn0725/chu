<template>
  <div class="container">
    <!-- 头像部分 -->
    <div class="head">
      <div class="head_pic">
        <img src="../../public/images/my_head.png" class="head_img">
      </div>
      <div class="head_text">
        <span class="head_id">菜鸡网_菜鸡沈</span>
        <span class="head_email">5555555@qq.com</span>
      </div>
    </div>
    <!-- 卡片部分 -->
    <div class="middle">
      <div class="card">
        <div class="card_item">
          <div>103</div>
          <div>照片</div>
        </div>
        <div class="card_item">
          <div>1.7k</div>
          <div>评论</div>
        </div>
        <div class="card_item">
          <div>1.5k</div>
          <div>关注</div>
        </div>
      </div>
    </div>
    <!-- 相册 -->
    <div class="album" >
      <div class="album-item">
        <div class="album_pic">
          <img src="../../public/images/album1.png" class="album_img">
        </div>
        <div class="album_name">
          酒店
        </div>
      </div>
      

    </div>

     <!-- <message
      class="itemstyle"
      v-for="(item,index) in datas.data"
      :key="index"
      :id="item.id"
      :title="item.title"
      :subtitle="item.subtitle"
      :sendtime="item.time"
      :itemClick="clickitem"
     ></message> -->

     <div>
       <bottom-bar></bottom-bar>
     </div>
  </div>
</template>
<script>
import BottomBar from "../components/BottomBar.vue";

export default {
  data(){
    return {
      album:{
        "data":[
          {
            "id":"1",
            
          },
        ]
      }
    }
  },
  created(){
    console.log(123);
    
  },
  methods: {
   
  },
  components:{
    BottomBar
  }
}
</script>
<style scoped>
.container {
  background-color: #f0f8ff1a;
  overflow: hidden;
}
/* 头像部分 */
.head{
  height: 7.733333rem;
  
  display: flex;
  flex-direction: column;
  justify-content:flex-end;
  align-items: center;
}
.head_pic{
  width:3.866667rem;
  height:3.866667rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 15px 8px #e6e6e6;
}
.head_img{
  width:3.866667rem;
}
.head_text{
  text-align: center;
  margin-top:.67rem;
}
.head_id,.head_email{
  display: block;
  height: 0.706667rem;
}
.head_id{
  font: bold .533333rem "幼圆","微软雅黑","宋体" ;
  margin-bottom: .15rem;
}
.head_email{
  font:.333333rem "Candara","my_boli","Constantia";
  margin-bottom: .7rem
}
/* 中间卡片部分 */
.middle{
  height:2rem;
  margin-bottom: .666667rem;
}
.card{
  text-align: center;
  height: 1.933333rem;
  width:8.933333rem;
  margin:0 auto;
  background-color: #fefefe;
  border-radius: 12px;
  box-shadow: 0 0 6px 2px #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.card_item>div:first-child{
  font:bold 20px "my_boli";
  margin-bottom: .066667rem;
}
.card_item>div:last-child{
  font:15px "华文宋体","新宋体";
}
/* 相册部分 */
.album{
  padding:0 0.533333rem; 
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.album_pic{
  width:4.3rem;
  height:3.85rem;
  box-shadow: 0 0 10px 2px #e6e6e6;
  border-radius: 15px;
  overflow: hidden;
}
.album_img{
  width:4.3rem;
}
.album_name{
  margin:.45rem .05rem;
  font:bold 20px "华文新魏","华文宋体","新宋体";

}

</style>
