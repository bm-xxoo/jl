// 引入vue
import Vue from 'vue';
// 实例化对象
let app = new Vue({
    // 绑定视图
    el: '#app',
    // 数据
    data: {
       flag: 1,
    },
    // 添加方法
    methods: {
        toggle() {
            this.flag = (this.flag + 1) > 4 ? 1: this.flag + 1; 
        }
    }
    
})
