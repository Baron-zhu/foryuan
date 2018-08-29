import Vuex from 'vuex'
import Vue from 'vue'

// 添加仓库插件
Vue.use(Vuex);

//导出仓库
export default new Vuex.Store({
    state:{ // 仓库: 存储值
        // loginState: false,
        // count: 0
    },
    mutations: { // 库管: 管理仓库里的值
        // loginState (state,data) {
        //     state.loginState = data;
        // },
        // changeCount (state) {
        //     state.count ++;
        // }
    },
    getters: { // 查询: 查询仓库里的值
        // loginState (state) {
        //     return state.loginState;
        // },
        // count (state) {
        //     return state.count;
        // }
    },
    actions: { // 柜台: 控制库管修改查询值
        // LOGIN_STATE (mutation, data) {
        //     mutation.commit('loginState',data);
        // }
    }
})