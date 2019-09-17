<template>
  <div>
      <div id="btn">
        添加评论
      </div>
    <!-- <van-action-sheet v-model="show" title="标题">
        <p>1111</p>
      <van-uploader v-model="fileList" multiple :max-count="2"/>
    </van-action-sheet> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
        show:true,
        fileList: []
    };
  }
};
</script>
<style scoped>
    #btn{
        width:80%;
        margin: 0 auto;
        background-color:  #4e74d8;
        border-radius: 31px;
        text-align: center;
        padding-top:0.3rem;
        padding-bottom: 0.3rem; 
        font-size: 20px;
        color: white;
    }
</style>
