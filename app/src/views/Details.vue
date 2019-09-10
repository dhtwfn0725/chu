<template>
    <div id="detail">
        <div id="main">
            <mt-header>
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
            <div class="top-title">
                <h1>凤凰古城</h1>
                <p class="">21,113家酒店可用</p>
            </div>
            <div>
                
            </div>
            <div class="top-img">
                
            </div>
            <div class="mid-title">
                <span>位于湖南省湘西土家族苗族自治州的西南部，由苗族、汉族、土家族等28个民族组成</span>
                <span>是中国西南文物建筑最多的县份。城内还有古色古香的石板街道200多条</span>
            </div>
            <button class="btn">酒店列表</button>
        </div> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #main{
        text-align: center;
        background-color:#fdf8f8 !important;
    }
    .top-title{
        width:2.666667rem;
        background-color: white;
        margin: 0 auto;
    }
    .top-img{
        margin: 0 auto;
        width: 80%;height:6.666667rem;
        background: url(../../public/images/h1.jpg);
        border-radius:.306667rem; 
    }
    .mid-title{
        width:85%;
        height:5rem;
        margin: 0 auto;
        background: #fff;
        align-items: center;
        font-size: 12px;
}
    .mid-title>span{
        display: inline-block;
        margin-top: .666667rem;
    }
    .btn{
        font-size: 20px;
        margin-top:-1rem;
        width:80%;
        padding-top: 0.4rem ;
        padding-bottom: 0.4rem;
        border-radius:34px;
        background-color: #4e74d8;
        color:white;
        border:0;   
     }
</style>
