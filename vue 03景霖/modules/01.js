// 引入vue
import Vue from 'vue';
// 引入样式
import '../scss/01.scss';
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
        },
        // 开始之前
        beforeEnter() {
            console.log(111, 'beforEnter');
        },
        enter() {
            console.log(112, 'enter');

        },
        afterEnter() {
            console.log(113, 'afterEnter');

        },
        beforeLeave() {
            console.log(114, 'beforleave');

        },
        leave() {
            console.log(115, 'leave');

        },
        afterLeave() {
            console.log(116, 'afterleave');

        },
    }
})


