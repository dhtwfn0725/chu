<template>
    <div class="card-item">
        <div class="img">
            <router-link to="details">
                <img :src="img">
            </router-link>
        </div>
        <div class="info">
            <div class="title">{{title}}</div> 
            <div class="desc">景点等级：{{grade}}级</div>
            <div class="person">
                <img src="images/r1.gif">
                <span>+{{item.comment_num}}</span>
                <span>评论了该景点</span>
            </div>   
        </div>
        <div class="eval" title="收藏量">
            <span>{{item.collection_num}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        // 接收父元素数据
        img:{default:""},
        title:{default:""},
        grade:{default:""},
        item:{default:Object},
    },
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
    .card-item{
        position: relative;
        width: 8.933333rem;
        height: 5.386667rem;
        margin: 0 auto;
        margin-bottom: .4rem;
    }
    .card-item .img {
        width: 100%;
        height: 100%;
    }
    .card-item .img  >a>img {
        width: 100%;
        height: 100%;
        border-radius: .266667rem;
    }
    .card-item .info {
        position: absolute;
        box-sizing: border-box;
        width: 7.04rem;
        height: 2.666667rem;
        left: -0.266667rem;
        bottom: .533333rem;
        padding-left: .533333rem;
        background-color: rgba(255,255,255,.8);
        border-radius: .266667rem
    }
    .card-item .info .title {
        font-size: .373333rem;
        font-weight: 600;
        line-height: .853333rem;
    }
    .card-item .info .desc {
        font-size: 12px;
        color:#7d7e80;
    }
    .card-item .info .person {
        margin-top: .133333rem;
        display: flex;
        align-items: center;
    }
    .card-item .info .person >img,.card-item .info .person >span:nth-child(2) {
        width: .906667rem;
        height: .906667rem;
        border-radius: 50%
    }
    .card-item .info .person >span:nth-child(2) {
        background-color: #5680fa;
        text-align: center;
        color:#fff;
        line-height:.906667rem ;
    }
    .card-item .info .person >span:last-child{
        font-size: 15px;
        color:#7d7e80;
        padding-left: .133333rem;
        font:bolder;
    }
    .eval {
        position: absolute;
        right: .266667rem;
        padding: .2rem;
        top: .293333rem;
        background-color: #fa607d;
        color: #fff;
        border-radius: .366667rem;
    }
</style>
