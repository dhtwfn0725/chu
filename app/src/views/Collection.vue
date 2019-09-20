<template>
    <div class="container">
        <!-- <h2>收藏景点列表</h2> -->
        <h4>{{msg}}</h4>
        <card-item
            v-for="(item,index) of datas"
            :key="index"
            :item="item"></card-item>
        <bottom-bar></bottom-bar>
    </div>
</template>
<script>
    import BottomBar from "../components/BottomBar.vue";
    import CardItem from "@/components/CardItem.vue";

    export default {
        data() {
            return {datas: [], page: 0, msg: ""}
        },
        components: {
            "bottom-bar":BottomBar,
            "card-item":CardItem
        },
        methods: {
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
                        console.log(this.datas);
                    })
            }
        },
        created() {
            this.init();
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
</style>