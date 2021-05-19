// 引入vue
import Vue from 'vue';

// 创建组件
let header1 = Vue.extend({
    template: '#header',
});
let main1 = Vue.extend({
    template: '#main',
});
let footer1 = Vue.extend({
    template: '#footer',
});

// 构建应用
const app = new Vue({
    // 注册组件
    components: {header1, main1, footer1},
    // 视图
    el: '#app',
    // 数据
    data: {
        child: 'header1'
    }
}) 

let router = () => {
    // 获得当前的hash值
    // console.log(location.hash.slice(2));
    app.child = location.hash.slice(2);
}
window.addEventListener('hashchange', router);
router();
