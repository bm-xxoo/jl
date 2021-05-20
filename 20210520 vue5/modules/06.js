// ES6 module
// 引入Vue
import Vue from 'vue';
// 引入router
import Router from 'vue-router';
// 引入scss
import '../scss/05.scss';

// 安装: vue的家族系列都使用use
Vue.use(Router);

// 创建组件
let first = {
    template: `
        <div class="a">
            <h1>first</h1>
            <h2>name: {{$route.fullPath}}</h2> 
        </div>
    `,
    // 2、局部守卫
    // beforeRouteEnter(to, from, next) {
    //     console.log(999, arguments);
    //     next();
    // },
    
}
let second = {
    template: `
        <div class="b">
            <h1>second</h1>
            <h2>id:{{id}}</h2>
        </div>
    `,
    props: ['id'],
} 
let three = {
    template: `
        <div class="c">
            <h1>three</h1>
            <h2>fullPath:{{fullPath}}----name:{{name}}</h2>
            <hr>
            <!--子路由的渲染位置-->
            <router-view></router-view>
        </div>
    `,
    props: ['fullPath', 'name'],
    created() {
       console.log(this.$route);
    },
    watch: {
        $route(to, from) {
            console.log(3333, arguments);
        }
    }
    
}  


// 创建路由规则
const routes = [
    { path: '/first', component: first, name:'first' },
    { 
        path: '/second/:id', component: second, name:'second',
        // 设置props
        props: true, 
    },
    {
        path: '/three', component: three, name:'three',
        // props方法，返回值为对象
        props(route) {
            // console.log(arguments);
            // return {

            // }
            let {fullPath, name} = route;
            return {fullPath, name}
        },
    },
    // 重定向
    { path: '/second', redirect: '/second/xxoo' }, 
    // 定义一个默认路由
    {path: '*', component: {template: '<h1>默认路由</h1>', name: 'default'}}
    
];

// 创建路由对象
const router = new Router({
    // 规则
    routes,
})

// 创建vue实例
const app = new Vue({
    // 视图
    el: '#app',
    // 数据
    data: {

    },
    // 注册路由
    router,
    // 3、自定义全局路由守卫
    watch: {
        $route(to, from) {
            console.log(444, arguments);
        }
    }
})


// 全局的路由守卫
// router.beforeEach((...args) => {
//     console.log(args);
// })  

// router.beforeEach((to, from, next) => {
//     /* must call `next` */
//     console.log('beforeEach');
//     next();
    
// });