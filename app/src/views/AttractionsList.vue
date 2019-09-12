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
            <card-item v-for="i in 10" :key="i"></card-item>
        </div>
        <div style="width:100%;height:50px;"></div>
        <div class="att_foot">
            <bottom-bar></bottom-bar>
        </div>
    </div>
</template>
<script>
import attlist from '../assets/json/attlist.json'
import BottomBar from "@/components/BottomBar.vue";
import CardItem from "@/components/CardItem.vue";
    export default {
        data() {
            return {
                datas:attlist,
                selected:""
            }
        },
        components:{BottomBar,CardItem}
    };
</script>
<style scoped="scoped">
/* 整体样式 */
.container {
    background-color: #f0f8ff1a;
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
    background-color: transparent;
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
</style>