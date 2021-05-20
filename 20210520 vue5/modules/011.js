//引入vue
import Vue from 'vue';
//1 引入router
import Router from 'vue-router';
// 2 安装  vue家族系列都是用use
Vue.use(Router);
//创建组件
let first = {
    tempalte: `
        <div>
            <h1>first</h1>
            <h2>name:{{$route.fullPath}}</h2>
        </div>
    `,
}
let second = {
    tempalte: `
        <div>
            <h1>second</h1>
            <h2>id:{{id}}</h2>
        </div>
    `,
    props:['id'],
}
let second = {
    tempalte: `
        <div>
            <h1>second</h1>
            <h2>fullPath:{{fullPath}}---name:{{name}}</h2>
        </div>
    `,
    props:['fullPath','name'],
}

//创建路由的规则
const routes = [
    {path:'/first',component:first,name:'first'},
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
        }
    },
    // 重定向
    { path: '/second', redirect: '/second/xxoo' }, 
    // 定义一个默认路由
    {path: '*', component: {template: '<h1>默认路由</h1>', name: 'default'}}
]
//创建路由对象
const router = new Router({
    //规则
    routes,
})
//创建vue实例
const app = new Vue({
    //视图
    el:"#app",
    //数据
    data:{

    },
    //注册路由
    router,
})
