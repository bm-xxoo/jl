// 引入vue
import Vue from 'vue';
// 引入样式
import '../scss/09.scss';
// 实例化对象
let app = new Vue({
    // 绑定视图
    el: '#app',
    // 绑定模型
    data: {
        flag: true
    },
    // 方法
    methods: {
        // 切换显示状态
        toggle() {
            this.flag = !this.flag;
        }
    }
})



