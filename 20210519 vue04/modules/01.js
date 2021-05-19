// 引入Vue
import Vue from 'vue';
// 实例化对象
const app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        msg: 'hello'
    },
    // 创建完毕
    created() {
        console.log(this);

        // 订阅一个消息
        this.$on('demo', (msg, ...args) => {
            console.log('$on', args);
            this.msg = msg;
        })

        // 做一个异步的任务，2秒后触发
        setTimeout(() => {
            // 箭头函数： 所以此处的this为上层作用域的this ----> app
            // 触发
            this.$emit('demo', 1, 2, 3, 4);
        }, 2000)

    },
    // 方法
    methods: {
        // 设置xxoo方法
        xxoo() {
            console.log('xxoo', arguments);
        }
    }
    
   

})