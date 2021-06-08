<template>
    <div>
       <van-nav-bar title="正在定位..." >
         <template #left>
         <van-icon name="search" size="18" />
          </template>
          <template #right>
            <span><a href="" @click.prevent="onClickLeft">登录</a>|<a href="" @click.prevent="onClickRight">注册</a></span>
          </template>
        </van-nav-bar>


    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="black">
          <van-swipe-item v-for="(item,index) in 2" :key="index"> 
             <van-grid>
               <van-grid-item v-for="(item,index) in shoplist" :key="index" :icon="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT'+item.photo"  :text="item.name" />
             </van-grid>
          </van-swipe-item>
    </van-swipe>

    </div>
</template>
<script>

import {Swipe,SwipeItem,Grid,GridItem,Card} from "vant"; 
export default {
    name:"home",
    data(){
        return{
              shoplist:null,
              shops:null,
              value:4
        }
    },
    components:{
        Swipe,SwipeItem,Grid,GridItem,Card
    },
    methods: {
    onClickLeft() {
      console.log("登录");
    },
    onClickRight() {
      console.log("注册");
    },
    fetchData:function(){
        var app = this;
        this.$http.post('/biz/queryBigCategory').then(function(res){
            console.log(res.data);
            app.shoplist = res.data
        })
    }
  },

}
</script>
<style>
  .my-swipe .van-swipe-item {
    color: rgb(34, 28, 28);
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #fff
  }
</style>