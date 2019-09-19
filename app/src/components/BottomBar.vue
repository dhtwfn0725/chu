<template>
  <div class="bottom-bar">
    <div class="image-box">
      <van-action-sheet v-model="show" title="相册列表-添加图片" @closed="showAdd = false">
        <div v-if="isLogin" class="main-list">
          <van-grid :column-num="3">
            <van-grid-item icon="plus" @click="addAlbum">
              <van-icon name="plus" class="plus-icon" color="#333" />
              <div style="margin-top:70px;">新建相册</div>
            </van-grid-item>
            <van-grid-item v-for="(item,index) of album" icon="plus" :key="index">
              <van-uploader
                :name="item.id"
                accept="image/*"
                :preview-image="false"
                multiple
                :max-count="5"
                :after-read="uploadImg"
              >
                <van-image :src="item.img" />
                <van-icon name="plus" color="#333" class="plus-icon" />
              </van-uploader>
              <div class="pic-name">{{item.name}}</div>
            </van-grid-item>
          </van-grid>
          <div class="add-album-box" v-show="showAdd">
            <van-cell-group>
              <van-field v-model.trim="albumName" maxlength="5" label="相册名称" placeholder="请输入相册名称" />
              <van-uploader v-model="albumImg" style="margin:20px;" :max-count="1" />
              <van-button type="info" @click="saveAlbum" size="large">创建</van-button>
            </van-cell-group>
          </div>
        </div>
        <div v-else class="nologin">
          没有登录，请先
          <router-link to="/login">登录</router-link>或
          <router-link to="/reg">注册</router-link>
        </div>
      </van-action-sheet>
    </div>
    <div class="add" @click="addImage">
      <span>+</span>
    </div>
    <van-tabbar route>
      <van-tabbar-item to="/" icon="shop">首页</van-tabbar-item>
      <van-tabbar-item to="/attlist" icon="point-gift">列表</van-tabbar-item>
      <van-tabbar-item to="/collection" icon="like">收藏</van-tabbar-item>
      <van-tabbar-item to="/my" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style scoped>
.bottom-bar .add {
  width: 1.226667rem;
  height: 1.226667rem;
  background-color: #5680fa;
  border-radius: 50%;
  color: #fff;
  position: fixed;
  bottom: 0.666667rem;
  z-index: 99;
  left: 50%;
  margin-left: -0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
}
.bottom-bar .mint-tabbar {
  height: 1.333333rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bottom-bar .mint-tabbar > a {
  display: block;
  width: 25%;
  height: 100%;
}

.mint-tab-item {
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nologin {
  min-height: 2.5rem;
  padding-top: 0.266667rem;
  text-align: center;
  font-size: 16px;
}
.image-box >>> .van-image__img {
  opacity: 0.7;
}
.plus-icon {
  position: absolute;
  font-size: 40px;
  color: #fff;
  left: 50%;
  top: 50%;
  margin-left: -20px;
  margin-top: -20px;
}

.main-list {
  min-height: 50vh;
}
.main-list >>> .van-grid-item__content--center {
  margin: 10px;
}
.main-list >>> .van-grid-item__content::after {
  border: 1px solid #ebedf0;
}
.add-album {
  float: left;
  width: 3.333333rem;
  height: 3.733333rem;
}
.add-album-box {
  box-sizing: border-box;
  padding: 0.266667rem;
  margin-top: 0.566667rem;
}
</style>
<script>
import qs from "qs";
import { Dialog } from "vant";
export default {
  data() {
    return {
      selected: "home",
      show: false,
      isLogin: false,
      album: [],
      albumImg: [], //封面
      albumName: "",
      showAdd: false
    };
  },
  created() {

    this.getMy();
  },
  methods: {
    getMy() {
      this.axios
        .get("/my")
        .then(res => {
          if (res.code == 0) {
            this.isLogin = true;
            this.album = res.data.result;
          }
        })
        .catch(err => {});
    },
    addAlbum() {
      this.showAdd = true;
    },
    saveAlbum() {
      if (this.albumName == "") {
        Dialog({ message: "请输入相册名称" });
        return;
      }
      if (this.albumImg.length == 0) {
        Dialog({ message: "请上传相册图片" });
        return;
      }
      var formData = new FormData();
      formData.append("photos", this.albumImg[0].file);
      formData.append("title", this.albumName);
      let config = {
        //添加请求头
        headers: { "Content-Type": "multipart/form-data" }
      };
      this.axios
        .post("/upload", formData, config)
        .then(res => {
          if (res.code == 0) {
            let file = res.data[0].destination + res.data[0].filename;
            let postData = { name: this.albumName, img: file };

            this.axios
              .post("/addAlbum", qs.stringify(postData))
              .then(res => {
                if (res.code == 0) {
                  this.showAdd = false;
                  this.getMy();
                }
                Dialog({ message: res.msg });
              })
              .catch(err => {});
          }
        })
        .catch(err => {});
    },
    addImage() {
      this.show = true;
    },
    uploadImg(files, name) {
      console.log(files, name);
      if (!(files instanceof Array)) {
        files = [files];
      }
      // todo
      var formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("photos", files[i].file);
      }
      console.log(formData.get("file"));
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };

      this.axios.post("/upload", formData, config).then(response => {
        let ret = response.data;
        let cid = name.name;
        let imgurls = "";
        console.log(ret);
        for (let i = 0; i < ret.length; i++) {
          imgurls += ret[i].destination + ret[i].filename + ",";
        }
        imgurls = imgurls.slice(0, -1);
        this.axios
          .post("/saveimg", qs.stringify({ cid, imgurls }))
          .then(response => {
             Dialog({ message: '添加成功' });
          });
      });
    }
  }
};
</script>