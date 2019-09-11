<template>
    <div class="container">
        <div class="header_top">
            <span>类别</span>
            <select name="" id="" class="my_select">
                <option value="">美国</option>
                <option value="">美国</option>
                <option value="">美国</option>
            </select>
        </div>
        <div class="input_search">
            <img src="../../public/images/search.png">
            <input type="text" placeholder="搜索目的地">
        </div>
        <div class="list_body">
            <div class="img_list" v-for="(item,index) in datas.data" :key="index">
                <div class="evaluation">
                    <mt-badge color="rgb(228, 105, 135)" size="large">{{item.ecount}}</mt-badge>
                </div>
                <img :src="'http://127.0.0.1:8080/'+item.img">
                <div class="img_msg">
                    <p>{{item.city}}</p>
                    <p>{{item.count}}家酒店可用</p>
                    <div class="tx_img">
                        <img src="../../public/images/r1.gif">
                        <div>+{{item.ucount}}</div>
                        <span>参观了这个城市</span>
                    </div>
                    
                </div>
            </div>
        </div>
        <div style="width:100%;height:50px;"></div>
        <div class="att_foot">
            <mt-tabbar v-model="selected" fixed>
                <mt-tab-item id="home">
                    <img slot="icon" src="../../public/images/home.png">
                </mt-tab-item>
                <mt-tab-item id="collect">
                    <img slot="icon" src="../../public/images/collection.png">
                </mt-tab-item>
                <mt-tab-item id="details">
                    <img slot="icon" src="../../public/images/xxfl.png">
                </mt-tab-item>
                <mt-tab-item id="mine">
                    <img slot="icon" src="../../public/images/mine.png">
                </mt-tab-item>
            </mt-tabbar>
        </div>
    </div>
</template>
<script>
import attlist from '../assets/json/attlist.json'
    export default {
        data() {
            return {
                datas:attlist,
                selected:""
            }
        }
    };
</script>
<style scoped="scoped">
/* 整体样式 */
.container {
    background-color: #f0f8ff1a;
    padding-top: 0.2rem;
    margin-bottom: 2.666667rem;
    overflow: hidden;
    
}

/* 顶部样式 */
.header_top {
    display: flex;
    justify-content: space-between;
    padding-right: 0.533333rem;
    padding-left: 0.533333rem;
}

.header_top > span {
    padding-top: 0.133333rem;
}
.mint-header {
    background-color: transparent;
    color: black;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.my_select {
    border: 1px solid #0069ff94;
    border-radius: 0.266667rem;
    color: #0069ff;
    font: bold;
    padding: 0.133333rem 0.666667rem;
    background: transparent;
}

/* 搜索样式 */
.input_search {
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
}
.input_search input {
    padding-left: 0.666667rem;
    padding-top: 3%;
    padding-bottom: 3%;
    border: 1px solid #ccc;
    border-radius: 0.266667rem;
    width: 8.133333rem;
}
.input_search img {
    position: relative;
    left: 0.666667rem;
    top: 0.133333rem;
    width: 0.533333rem;
}

/* 评价徽章样式 */
.evaluation{
    position: relative;
    top: 1.033333rem;
    left: 3.733333rem;
}

/* 图片等相关样式 */
.img_list{
    margin-top: .666667rem;
    text-align: center;
    height: 6.666667rem;
}
.img_list img{
    width: 9.066667rem;
    border-radius: 5%;
}
.img_msg{
    position: relative;
    top: -3.733333rem;
    background: white;
    opacity: 0.8;
    width: 7rem;
    border-radius: 5px;
}
.tx_img{
    display: flex;
    justify-content:left;
    width: 100%;
    padding-left: 10%;
}
.tx_img img{
    width: 1.066667rem;
    height: 1.066667rem;
    border-radius: 50%;
    z-index: 2;
}
.tx_img div{
    background: #2875ec;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    line-height: 40px;
    color: white;
    z-index: 1;
}
.tx_img span:last-child{
    color: #263f42ab;
    padding-top: 10px;
    font-weight:bolder;
    padding-left: .133333rem;
}
.img_msg>p:nth-child(1){
    font-weight:bolder;
    font-size: 15px;
}
.img_msg>p:nth-child(2){
    font-weight:bolder;
    font-size: 10px;
    color: #263f42ab;
}
.img_msg p{
    text-align: left;
    margin-left: .8rem;
}
</style>