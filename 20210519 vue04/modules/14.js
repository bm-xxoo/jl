// 引入Vue
import Vue from 'vue';
// 引入路由
import Router from 'vue-router';
// 1、安装路由
Vue.use(Router);

// 3、定义组件
let first = {template: '<h1>header</h1>'}
let second = {template: '<h1>main</h1>'}
let three = {template: '<h1>footer</h1>'}

// 4、创建路由规则
const routes = [
    // 静态路由规则
    {path:'/first', component: first, name: 'first'},
    // 动态路由
    {path:'/second/:id', component: second, name: 'second'},
    {path:'/three', component: three, name: 'three'},
]

// 5、创建路由对象
// const router = new Router({routes: routes})
const router = new Router({routes})
// 创建实例对象
const app = new Vue({
    // 6、注册路由
    router,
    // 视图
    el: '#app',
    // 数据
    data: {

    }
})