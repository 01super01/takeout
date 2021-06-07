import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import User from "../components/User.vue"
import Login from "../components/Login.vue"
import Loginlist from "../components/Loginlist"
import Logout from "../components/Logout.vue"
import Shop from "../components/Shop.vue"
import Shoplist from "../components/Shoplist.vue"
import Search from "../components/Search.vue"
import Cart from "../components/Cart.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
      path: '/Home',
      name: 'home',
      component:Home
    },
    {
      path:'/User',
      name:'user',
      component:User,
      props:true
    },
    {
      path:'/login',
      name:'login',
      component:Login,
      props:true
    },
    {
      path:'/loginlist',
      name:'Loginlist',
      component:Loginlist,
      props:true
    },
    {
      path:'/logout',
      name:'Logout',
      component:Logout,
      props:true
    },
    {
      path:'/shop',
      name:'Shop',
      component:Shop,
      props:true
    },
    {
      path:'/shoplist',
      name:'Shoplist',
      component:Shoplist,
      props:true
    },
    {
      path:'/search',
      name:'Search',
      component:Search,
      props:true
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart,
      props:true
    }
  ]
})
