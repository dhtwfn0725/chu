<template>
  <div class="my-album" >
    <!-- 上传图片跳转 -->
    <van-button type="info" size="large" icon="/images/icon_cam.png" class="up_btn" @click="btnClick">上传照片/视频</van-button>
    
    <div v-for="(item,index) in list" :key="index" class="albun_block">
      <!-- 日期 -->
      <h2 class="album-date">{{item.date}}</h2>
      <!-- 图片 -->
      <div class="album_div">
        <div class="album_pic" v-for="(item,i) in list[index].imgs" :key="i">
          <img :src="item" style="object-fit: cover" class="album_pics" @click="preview">
        </div>
      </div>
    </div>


    <!-- 测试 上传部分-->
    <van-dialog v-model="show" show-cancel-button :beforeClose="beforeClose" title="照片/视频上传" confirmButtonText="上传" class="upl">
      <!-- <div class="upl1"> -->

        <!-- 上传组件 -->
        <van-uploader :after-read="afterRead" v-model="fileList" multiple :max-count="9" class="upl2"/>

      <!-- </div> -->

    </van-dialog>

  </div>
</template>

<script>
import { Dialog,Toast,ImagePreview } from 'vant';

import qs from 'qs';

export default {
  data() {
    return {
      cid:"",
      list:[],
      show:false,
      fileList:[
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        ],
    
      canClick:true
    }
  },
  methods: {
    //图片预览
    preview(){
      ImagePreview(this.pres);
    },
    
    // 文件上传完触发
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // console.log(file);
    },
    // 选完以后调用axios发送图片给服务器
    uploadPics(){
      let fileList = this.fileList;
      var formData = new FormData()
    },
    load(){
      // console.log(this.$route)
      var url="/imglist";
      this.cid=this.$route.query.cid
      this.axios.get(url,{params:{
        cid:this.cid
      }})
      .then(res=>{
        if(res.code==0){
          // console.log(res.data)
          this.list=res.data;
        }else if(res.code==-1){
          this.$messagebox("消息",`啊哦，${res.msg}好像出错了~`)
        }
      })
    },
    btnClick(){
      this.show=!this.show;
    },
    beforeClose(action, done){

      if(action=="confirm"){
        if(this.fileList==0){
          Toast('请先选择图片')
          done(false);
          return;
        }
        // 上传图片
        let fileList = this.fileList;
        var formData = new FormData();
        for (let i = 0; i < fileList.length; i++) {
          formData.append("photos", fileList[i].file);
        }

        let config = {
          headers: { "Content-Type": "multipart/form-data" }
        };

        if(this.canClick){
          this.canClick==false;
          this.axios.post("/upload", formData, config).then(response => {
            let ret = response.data;
            let imgs = []; // 保存返回图片路径
            for (let i = 0; i < ret.length; i++) {
              imgs.push(ret[i].destination + ret[i].filename);
            }
            imgs = imgs.toString()
            // 传参数 
            let postData = { imgurls:imgs,cid:this.cid };
            this.axios
              .post("/saveimg", qs.stringify(postData))
              .then(response => {
                this.canClick=true;
                Dialog.alert({ message: response.msg }).then(
                  ()=>{
                      this.load()
                      done()
                      this.fileList=[]
                  }
                )
              })
              .catch(err => {});
          });
        }
      }else{
        done();
      }
       
    },

  },
  computed:{
    pres(){
      var a=[]
      for(var pics of this.list){
        if(pics.imgs.length>0){
          a=a.concat(pics.imgs)
        }
      }
      return a
    }
  },
  created(){
    this.load() 
    // console.log(this.list)
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
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
  .album-date{
    margin-left: .266667rem
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


  /* 测试 */
 
</style>