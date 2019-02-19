//基于webpack的开发，是基于模块化的开发
//var Vue = require('vue);
import Vue from 'vue';
import App from './App.vue';
//导入全局的样式
//导入bootstarp的样式
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

new Vue({
  el: '#app',
  render: h => h(App)
})
