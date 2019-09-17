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
          <van-uploader v-model="fileList" multiple :max-count="5" id="upload" />
        </div>
      </div>
    </van-action-sheet>
    <div class="bottom-btn" id="btn" @click="isShow">添加评论</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      fileList: [],
      message: ""
    };
  },
  methods: {
    isShow() {
      this.show = true;
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
  bottom: 0;
  left: 0;
  z-index: 9;
}
.upload-img {
  padding-left: .4rem;
  margin-top: .266667rem;
}
</style>
