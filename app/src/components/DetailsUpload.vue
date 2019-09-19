<template>
  <div class="upload">
    <van-action-sheet v-model="show" title="添加评论">
      <div class="hide" v-if="isLogin">
        <div class="textarea">
          <van-cell-group>
            <van-field
              v-model="message"
              label="评论"
              type="textarea"
              placeholder="请输入评论内容"
              rows="5"
              autosize
              id="father"
              maxlength="100"
            />
          </van-cell-group>
        </div>
        <div class="upload-img">
          <div class="posting-uploader">
            <van-uploader
              v-model="fileList"
              :after-read="afterRead"
              :accept="'image/*'"
              multiple
              :max-count="5"
            ></van-uploader>
          </div>
        </div>
        <div class="upda" @click="submitComment">提交</div>
      </div>
      <div v-else class="login-box">
         您还没有登录，
         <router-link to="/login">马上登录</router-link>
      </div>
    </van-action-sheet>
    <div class="bottom-btn" @click="isShow">添加评论</div>
  </div>
</template>
<script>
import { Dialog } from "vant";
import qs from 'qs'
export default {
  data() {
    return {
      show: false,
      fileList: [],
      message: "",
      canPost: true,
      isLogin:false
    };
  },
  props: ["sid"],
  methods: {
    submitComment() {
      if (this.canPost) {
        this.canPost = false;

        let message = this.message.trim();
        if (message == "") {
          Dialog({ message: "评论内容为空！" });
          this.canPost = true;
          return;
        }
        let sid = this.sid;
        //  上传图片
        let fileList = this.fileList;
        var formData = new FormData();
        for (let i = 0; i < fileList.length; i++) {
          formData.append("photos", fileList[i].file);
        }

        let config = {
          headers: { "Content-Type": "multipart/form-data" }
        };

        this.axios.post("/upload", formData, config).then(response => {
          let ret = response.data;
          let imgs = []; // 保存返回图片路径
          for (let i = 0; i < ret.length; i++) {
            imgs.push(ret[i].destination + ret[i].filename);
          }
          imgs = imgs.toString()
          //  保存评论
          let postData = { content: message, sid, imgs };
          this.axios
            .post("/addComment", qs.stringify(postData))
            .then(response => {
              Dialog({ message: response.msg });
              //  实际上还需要触发事件
              this.show = false;
              this.canPost = true;
            })
            .catch(err => {});
        });
      }
    },
    isShow() {
      this.show = true;
    },
    delImg(n) {
      console.log(n);
    },
    afterRead(files) {
      console.log(this.fileList);
    }
  },
  created(){
    this.axios.get('/my').then(res=>{
        // 判断是否登录状态
        if(res.code == 0){
            this.isLogin = true
        }
      })
  }
};
</script>
<style scoped>
.toast-index {
  z-index: 999;
}
.textarea >>> .van-field__body textarea {
  border: 1px dashed #ccc;
  padding: 0.133333rem;
}
.textarea >>> .van-field__label {
  width: 1rem;
}
.bottom-btn {
  position: fixed;
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  color: #fff;
  font-size: 16px;
  text-align: center;
  background-color: #4e74d8;
  border-radius: 31px;
  bottom: 0;
  left: 0;
  z-index: 9;
}
.upload-img {
  padding-left: 0.4rem;
  margin-top: -5px;
  margin-left: 40px;
}
.upda {
  position: absolute;
  text-align: center;
  top: 0;
  right: 0;
  font-size: 15px;
  padding: 9px 18px;
  /* color: white; */
  /* background-color:#4e74d8;  提交样式，浅蓝可要可不要*/
}
.van-action-sheet__close {
  left: 0;
  right: auto;
}
.login-box {
  height: 2rem;
  line-height: 2rem;
  text-align: center;
}
</style>
