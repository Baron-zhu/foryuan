// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import '@/assets/public.css';
import '@/assets/normalize.css';
import store from './store'

// console.log(store.getters);
// console.log(store.state);

// 可以通过 state 或者 mutation 直接修改仓库里的值
// store.commit('change'); // count: 1
// store.state.loginState = true; // loginState: true
// 通过 actions 修改仓库值
// store.dispatch('loginState'); // loginState: true


Vue.config.productionTip = false
Vue.use(iview)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
