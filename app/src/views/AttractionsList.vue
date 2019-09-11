<template>
  <div class="container">
    <div class="jdlist">
        <h1>说走就走的旅行</h1>
        <mt-swipe :show-indicators="false" :auto="0">
        <mt-swipe-item>
            <div>
                <img src="../../public/images/lswjs_01.jpg">
            </div>
        </mt-swipe-item>
        <mt-swipe-item>
            <div>
                <img src="../../public/images/lswjs_02.jpg">
            </div>
        </mt-swipe-item>
        <mt-swipe-item>
            <div>
                <img src="../../public/images/lswjs_03.jpg">
            </div>
        </mt-swipe-item>
        </mt-swipe>
    </div>
    <div class="attlist_body">
        <h1>拉斯维加斯</h1>
    </div>
    <div class="attlist_foot">
        <div><img src="../../public/images/lswjs_01.jpg"></div>
        <div><img src="../../public/images/lswjs_02.jpg"></div>
        <div><img src="../../public/images/lswjs_03.jpg"></div>
    </div>
    <mt-button type="primary" size="large">酒店列表</mt-button>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
    .container{
        background-color: white;
    }
    .mint-swipe img{
        width: 75%;
        border: 1px solid transparent;
        border-radius: .3125rem;
    }
    .jdlist{
        height: 7.5rem;
        text-align: center;
    }
    .jdlist>h1{
        display: inline-block;
        margin-right: 30%;
    }
    .attlist_body>h1:nth-child(1){
        text-align: center;
    }
    .attlist_foot img{
        width: 2.8125rem;
        border: 1px solid transparent;
        border-radius: .3125rem;
        box-sizing: border-box;
    }
    .attlist_foot{
        display: flex;
        justify-content: space-between;
        margin: 5% 6% 5% 6%;
    }
    .mint-button{
        margin: .625rem auto;
        height: 1.5625rem;
        border-radius: .625rem;
        width: 8.75rem
    }
</style>