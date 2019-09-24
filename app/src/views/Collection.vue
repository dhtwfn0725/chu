<template>
    <div class="container">
        <!-- <h2>收藏景点列表</h2> -->
        <h4>{{msg}}</h4>
        <card-item
            v-for="(item,index) of datas"
            :key="index"
            :item="item"></card-item>
        <div class="title">
            <van-tag mark="mark">为您推荐</van-tag>
            <van-button icon="more" @click="toMore" color="#607D8B">更多城市景点</van-button>
        </div>
        <hr>
        <div class="city_tag">
            <van-tag color="#f2826a">武汉</van-tag>
            <van-tag color="#f2826a" plain="plain">黄石</van-tag>
            <van-tag color="#7232dd" plain="plain">宜昌市</van-tag>
            <van-tag color="#ffe1e1" text-color="#ad0000">十堰市</van-tag>
        </div>
        <div class="slider">
            <slider :list="cityList"></slider>
        </div>
        <bottom-bar></bottom-bar>
    </div>
</template>
<script>
    import BottomBar from "../components/BottomBar.vue";
    import CardItem from "../components/CardItem.vue";
    import Slider from "../components/Slider.vue";

    export default {
        data() {
            return {datas: [], page: 0, msg: "",cityList: []}
        },
        components: {
            "bottom-bar":BottomBar,
            "card-item":CardItem,
            "slider":Slider
        },
        methods: {
            getCityList() {
                let url = "/city";
                this
                    .axios
                    .get(url)
                    .then(res => {
                        this.cityList = this
                            .cityList
                            .concat(res.data);
                    });
            },
            toMore(){
                this.$router.push("/attlist");
            },
            init() {
                this.page++;
                this
                    .axios
                    .get(`/collection?page=${this.page}`)
                    .then(rs => {
                        if (rs.code == -1) {
                            this
                                .$messagebox
                                .confirm(rs.msg)
                                .then(rs => {
                                    this
                                        .$router
                                        .push("login");
                                })
                        } else if (rs.code == -2) {
                            this.msg = rs.msg;
                        } else if (rs.code == 1) {
                            this.msg = rs.msg;
                            var rows = this
                                .datas
                                .concat(rs.data);
                            this.datas = rows;
                        }
                    })
                
            }
        },
        created() {
            this.init();
            this.getCityList();
        }
    }
</script>
<style scoped>
    .container{
        background-color: #ebecec;
        padding-top: 8px;
        padding-bottom: 20%;
    }
    .container>h4{
        padding-left: 5%;
        box-shadow: 5px 5px 5px 0px #888888;
    }
    .title>span{
        margin-right: 5%;
    }
    .title{
        margin: .4rem .266667rem .8rem .4rem;
    }
    .slider{
        margin-top: 15%;
    }
    .city_tag{
        position: relative;
        top: .9rem;
        margin: .4rem .266667rem .8rem .4rem;
    }
    .city_tag>span{
        margin-right: 5%;
    }
    hr{
        box-shadow: 0px 0px 20px 10px #607d8b;
    }
</style>