import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions.js";
import mutations from "./mutations.js";


Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
         listname:[
            {name:"all",desc:"外卖"},
            {name:"search",desc:"搜索"},
            {name:"shop",desc:"订单"},
            {name:"user",desc:"我的"}
         ]
    },
    actions:actions,
    Mutations:mutations
})

export default store;