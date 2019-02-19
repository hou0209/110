//基于webpack的开发，是基于模块化的开发
//var Vue = require('vue);
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
//导入全局的样式
//导入bootstarp的样式
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

//导入路由组件
import HeroList from './views/heroes/list.vue';
import WeaponList from './views/weapons/list.vue';
import EqupList from './views/equips/list.vue';
//Vue.use()注册VueRouter插件
Vue.use(VueRouter);

//创建路由对象
const router = new VueRouter({
  //路由规则
  routes: [
    {path :'/heroes', component:HeroList},
    {path :'/equips', component: EqupList},
    {path: '/weapons',component:WeaponList}
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
