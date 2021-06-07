<template>
  <div id="app">
    <van-tabbar v-model="active">
          <van-tabbar-item icon="home-o" to="/Home">外卖</van-tabbar-item>
          <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
          <van-tabbar-item icon="cart-o" to="/shop">订单</van-tabbar-item>
          <van-tabbar-item icon="friends-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
   data(){
        return{
              active: 0,
        }
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
