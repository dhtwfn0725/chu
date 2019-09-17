<template>
    <div>
        <h2>收藏景点列表</h2>
        <h4>{{msg}}</h4>
        <card-item
            v-for="(item,index) of datas"
            :key="index"
            :img="item.img"
            :title="item.title"
            :grade="item.grade"></card-item>
        <bottom-bar></bottom-bar>
    </div>
</template>
<script>
    import BottomBar from "@/components/BottomBar.vue";
    import Collist from '@/components/Collist';
    import CardItem from "@/components/CardItem.vue";

    export default {
        data() {
            return {datas: [], page: 0, msg: ""}
        },
        components: {
            BottomBar,
            Collist,
            CardItem
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
                    })
            }
        },
        created() {
            this.init();
        }
    }
</script>