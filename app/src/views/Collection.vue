<template>
    <div>
        <h2>收藏景点列表</h2>
        <bottom-bar></bottom-bar>
    </div>
</template>
<script>
import Search from "@/components/Search.vue";
import BottomBar from "@/components/BottomBar.vue";
import Collist from '@/components/Collist';

export default {
    data() {
        return {
            datas:[]
        }
    },
    components: {
            BottomBar,
            Search,
            Collist
        },
        methods: {
            init() {
                this.axios.get("/my").then(rs=>{
                    // console.log(rs);
                    if(rs.code==-1){
                        this.$messagebox.confirm(rs.msg).then(rs=>{
                            this.$router.push("login");
                        })
                    }
                })
                // this.axios("/my",(req,res)=>{
                //     this.datas = res;
                // }).then((result) => {
                //     console.log(result);
                // }).catch((err) => {
                //     throw err;
                // });
            }
        },
        created() {
            this.init();
        }
}
</script>