<template>
    <div id="detail">
        <div id="main" class="main">
            <div class="top-title">
                <h1>凤凰古城</h1>
                <p style="text-align: center;">景点等级:5A级</p>
            </div>
            <div class="mid-style">
                <div class="mid_praise">
                    <div><img src="/images/r1.gif" alt="" style="width:100%;border-radius:50%;"></div>
                    <div><img src="/images/r2.jpg" alt="" style="width:100%;border-radius:50%;"></div>
                    <div>+520</div>
                    <span>520人评论了该景点</span>
                </div>
            </div>
            <div class="top-img">
                <img src="/images/h2.jpg" alt="">
                <span class="">9.2</span>
            </div>
            <div class="mid-title">
                <span>位于湖南省湘西土家族苗族自治州的西南部，由苗族、汉族、土家族等28个民族组成</span>
                <span>是中国西南文物建筑最多的县份。城内还有古色古香的石板街道200多条</span>
            </div>
            <button class="btn">景点图集</button>
        </div> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #detail{
        background-color:#ebecec !important;
    }
    #main{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 1.15rem;
    }
    .top-title{
        margin-top: 1rem;
    }
    .mid-style{
        width:100%;
        height:2rem;
        text-align: center;
    }
    .mid_praise{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        width:60%;height:90%;
        border-top: 1px solid #d0cccc;
        text-align: center;
        align-items: center;
        margin: 0 auto;
    }
    .mid_praise>div{
        width: 45px;height:45px;
        border-radius: 50%;
        margin-top: 0.2rem;
    }
    .mid_praise>:nth-child(3){
        border-radius: 50%;
        background-color: #4e74d8;
        color: white;
        text-align: center;
        line-height: 350%;
        font-weight: 600;
    }
    .mid_praise>span{
        margin-top:10px;
    }
    .top-img{
        width:75%;
        margin: 0 auto;
        position: relative;
    }
    .top-img>img{
        width: 100%;height:100%;
        border-radius:.306667rem; 
    }
    .top-img>span{
        width: .7rem;
        padding: 10px 11px;
        background-color: hotpink;
        border-radius: 31px;
        text-align: center;
        color: white;
        font-weight: 600;
        position: absolute;
        top:13%;
        right: -7.5%;
    }
    .mid-title{
        width:85%;
        height:5rem;
        background: #fff;
        font-size: 12px;
        border-radius:.306667rem; 
        text-align: center;
    }
    .mid-title>span{
        display: inline-block;
        width: 80%;
        text-align: center;
        margin: 0 auto;
        margin-top: .666667rem;
    }
    .btn{
        font-size: 20px;
        margin-top:-0.5rem;
        width:80%;
        padding-top: 0.4rem ;
        padding-bottom: 0.4rem;
        border-radius:34px;
        background-color: #4e74d8;
        color:white;
        border:0;   
     }
     /* #detail>:nth-child(2){
         width: .7rem;
         padding: 10px 12px;
         background-color: hotpink;
         border-radius: 31px;
         text-align: center;
         position: fixed;
         top:6.266667rem;left: 8rem ;
         color: white;
         font-weight: 600;
     } */
</style>
