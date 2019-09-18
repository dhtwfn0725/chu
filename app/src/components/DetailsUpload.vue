<template>
  <div class="upload">
    <van-action-sheet v-model="show" title="添加评论">
      <div class="hide">
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
          <!-- <van-uploader v-model="fileList" :after-read="afterRead" @delete="delImg" multiple :max-count="5" /> -->
          <div class="posting-uploader">
            <span v-for="(item,nn) in fileList" :key="nn">
              <img :src="item.content" width="80" height="80" class="uploadimg" />
              <van-icon name="close" @click="delImg(nn)" class="delte" />
            </span>
            <van-uploader v-model="fileList" :preview-image="false" :after-read="afterRead" :accept="'image/*'" multiple :max-count="5" >
            </van-uploader>
          </div>
        </div>
        <div class="upda">提交</div>
      </div>
    </van-action-sheet>
    <div class="bottom-btn" @click="isShow">添加评论</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      fileList: [],
      message: "",
    };
  },
  props: ["sid"],
  methods: {
    isShow() {
      this.show = true;
    },
    delImg(n) {
      console.log(n)
    },
    afterRead(files) {
      console.log(files);
      if (!(files instanceof Array)) {
        files = [files];
      }
      // todo
      return;
      var formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("photos", files[i].file);
      }
      console.log(formData.get("file"));
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };

      this.axios.post("/upload", formData, config).then(response => {
        let ret = response.data;
        let cid = this.sid;
        console.log(ret);
        for (let i = 0; i < ret.length; i++) {
          this.fileList.push(ret[i].destination + ret[i].filename);
        }
        console.log(this.fileList);
      });
    }
  }
};
</script>
<style scoped>
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
</style>
