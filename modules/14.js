// 引入Vue
import Vue from 'vue';


// 构建应用
let app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        sex: 'nv',
        // 第二种情况
        hobby: {
            a: true,
            b: false,
            c: true,
            d: false
        }
    },
   
})

console.log(app);