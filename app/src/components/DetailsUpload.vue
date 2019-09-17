<template>
  <div>
    <van-action-sheet v-model="show" title="上传">
      <div class="hide">
        <van-cell-group>
          <van-field v-model="message" label="评论" type="textarea" placeholder="请输入评论" rows="5" autosize id="father"/>
          <van-uploader v-model="fileList" multiple :max-count="5" id="upload"/>
        </van-cell-group>
      </div>
    </van-action-sheet>
    <button id="btn" @click="isShow">添加评论</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      fileList: [],
      message:""
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
div {
  text-align: center;
}
#btn {
  width: 80%;
  background-color: #4e74d8;
  border-radius: 31px;
  border: 0;
  text-align: center;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  font-size: 20px;
  color: white;
  margin-top: 1px;
}
#upload{
    position: absolute;
    top:10px;left:50px;
}
.van-cell-group{
    position: relative;
}
.van-uploader{
    position: absolute;
    top:40px;left:20px;
}
</style>
