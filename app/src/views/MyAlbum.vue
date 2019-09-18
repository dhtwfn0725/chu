<template>
  <div class="my-album">
    <van-uploader>
      <van-button type="info" size="large" icon="/images/icon_cam.png" class="up_btn">上传照片/视频</van-button>
    </van-uploader>
    <div v-for="(item,index) in list" :key="index" class="albun_block">
      <h2>{{item.date}}</h2>
      <div class="album_div">
        <div class="album_pic" v-for="(item,i) in list[index].imgs" :key="i">
          <img :src="item" style="object-fit: cover" class="album_pics">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[
        {date:"2019-03-12",imgs:["/images/h1.jpg","/images/h1.jpg","/images/h1.jpg","images/h1.jpg"]},
        {date:"2019-03-29",imgs:["/images/h1.jpg","/images/h1.jpg"]}
        ]
    }
  },
  methods: {
    load(){
      // console.log(this.$route)
      var url="/imglist";
      this.axios.get(url,{params:{
        cid:this.$route.query.cid
      }})
      .then(res=>{
        if(res.code==0){
          console.log(res.data)
          this.list=res.data;
        }else if(res.code==-1){
          this.$messagebox("消息",`啊哦，${res.msg}好像出错了~`)
        }
      })
    }
  },
  created(){
    this.load()
  }
}
</script>
<style scoped>
  .my-album{
    min-height: 100vh;
  }
  /* 每一块的样式 */
  .album_block{

  }
  .album_div{
  /* 内部放图片的div的样式 */
    display: flex;
    flex-wrap: wrap;
  }
  .album_pic{
    overflow: hidden;
    width:3.293333rem;
    height:3.293333rem;
    margin-right:.06rem;
    margin-bottom:.06rem;
  }
  .album_pic:nth-child(3n){
    margin-right:0;
  }
  /* 每张图片 */
  .album_pics{
      width:100%;
      height:100%;
      background: #000;
    }
</style>