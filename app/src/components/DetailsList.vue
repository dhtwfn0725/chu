<template>
    <div>
        <div id="main">
            <div class="top">
                <div>
                    <div style="width:45px;height:45px;">
                        <img src="/images/r1.gif" style="width:100%;border-radius:50%;">
                    </div>
                    <span>爱吃草的牛:</span>
                </div>
                <div><span>11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</span></div>
                <div class="pic">
                    <img src="/images/h2.jpg" style="width:30%;margin-right:0.1rem;
                    border-radius:5%;">
                    <img src="/images/h1.jpg" style="width:30%;border-radius:5%;">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #main{
        width:90%;
        margin: 0 auto;
        border-radius: 20px;
    }
    .top{
        align-items: center;
        width:90%;
        margin: 0 auto;
        border: 1px solid #888;
        border-radius: 12px;
        padding: 5px 0;
    }
    .top>div:nth-child(1){
        display: flex;
        align-items: center;
    }
    .top>div:nth-child(1)>div,
    .top>div:nth-child(2),
    .pic{
         margin-left: .566667rem;
    }
    .top>div:nth-child(2){
        width:90%;
    }
    .top>div:nth-child(2)>span{
        width:100%;
        word-wrap: break-word;    
    }
</style>
