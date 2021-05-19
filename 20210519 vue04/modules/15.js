// 引入Vue
import Vue from "vue";
// 引入路由
import Router from "vue-router";
// 1、安装路由
Vue.use(Router);

// 3、定义组件
let first = {
  template: "#first",
  // 创建完毕
  created() {
    console.log("first", this);
  },
};
let second = {
    // 2、在组件中接收
    // props:['id'],

    props: ['name','id', 'fullPath', 'sex', 'hash'],
    template: "#second",
    created() {
        console.log(9999999);
        console.log(this.$route);
        // console.log(this.id);
        // console.log(this.sex);
        // console.log(this.hash);
    }
};
let three = { template: "<h1>footer</h1>" };

// 4、创建路由规则
const routes = [
  // 静态路由规则
  { path: "/first", component: first, name: "first1" },
  // 动态路由
  {
    path: "/second/:id",
    component: second,
    name: "second",
    // 1、定义要传递的数据
    // props: true, // 此时值传递params
    // 值为对象
    props(route) {
        // console.log(arguments);
        return {
            name: route.name,
            id: route.params.id,
            fullPath: route.fullPath,
            sex: route.query.sex,
            hash: route.hash
        }
    }
  },
  { path: "/three", component: three, name: "three" },
    // 路由重定向  
    {path: '/second', redirect: '/second/demo?name=zhangsan&age=18#top'},
    // 设置默认路由
    {path: '*', component: {template: '<h1>index</h1>'}}   
];

// 5、创建路由对象
// const router = new Router({routes: routes})
const router = new Router({ routes });
// 创建实例对象
const app = new Vue({
  // 6、注册路由
  router,
  // 视图
  el: "#app",
  // 数据
  data: {},
  // 创建完毕
  created() {
    console.log("app", this);
  },
});
