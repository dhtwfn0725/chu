<template>
    <div class="container">
        <div class="header_top">
            <h2>景点列表</h2>
            <!-- <select name="" id="" class="my_select">
                <option value="">美国</option>
                <option value="">美国</option>
                <option value="">美国</option>
            </select> -->
        </div>
        <!-- <search></search> -->
        <div class="list_body">
            <card-item
                v-for="(item,index) of datas"
                :key="index"
                :img="item.img"
                :title="item.title"
                :grade="item.grade"
                :item="item">
                </card-item>
        </div>
        <div class="loadMore">
            <mt-button size="large" type="danger" @click="search">加载更多</mt-button>
        </div>
        <div style="width:100%;height:100px;"></div>
        <div class="att_foot">
            <bottom-bar></bottom-bar>
        </div>
    </div>
</template>
<script>
    // import attlist from '../assets/json/attlist.json'
    import BottomBar from "@/components/BottomBar.vue";
    import CardItem from "@/components/CardItem.vue";
    import Search from "@/components/Search.vue";
    export default {
        data() {
            return {
                datas: [],
                page:0,
                title:""
            }
        },
        components: {
            BottomBar,
            CardItem,
            Search
        },
        methods: {
            search() {
                this.page++;
                this
                    .axios
                    .get(`/search?title=${this.title}&page=${this.page}`)
                    .then(rs => {
                        var rows = this.datas.concat(rs);
                        this.datas = rows;
                    });
            }
        },
        created() {
            this.search();
        }
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
        margin-top: 0.266667rem;
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
    /* .my_select {
        border: 1px solid #0069ff94;
        border-radius: 0.266667rem;
        color: #0069ff;
        font: bold;
        padding: 0.133333rem 0.666667rem;
        background-color: transparent;
    } */
</style>