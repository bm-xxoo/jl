//引入Vue
import Vue from 'vue';
//全局过滤器
Vue.filter('toUpper',(str) => {
    str = String(str);
    return str.toUpperCase();
})
//构建应用
let app = new Vue({
    //视图
    el:'#app',
    //模型
    data:{
        title:'hello world',
        msg:'你好'
    },
})
console.log(app);
