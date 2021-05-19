// 引入Vue
import Vue from 'vue';

// 声明一个组件
const child = Vue.extend({
    // 模板
    template: `
        <div>
            <h1>child part</h1>
            <h2>{{msg}}</h2>
        </div>
    `,
    // 模型
    data() {
        return {
            msg: 'child component'
        }
    },
    // 创建完毕
    created() {
        // 订阅消息
        // this.$on('childDemo', (...args) => {
        //     console.log(...args);
        // })

        // 发布消息: 此处不需要转为驼峰命名法
        // this.$emit('child-demo', 1, 2, 3, 4)
        this.$emit('child-demo', this.msg)
    },
   

});
// 实例化对象
const app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        msg: 'hello'
    },
    // 注册子组件
    components: {child},
    // 创建方法
    methods: {
        xxoo(msg) {
            console.log('xxoo', arguments);
            this.msg = msg;
        }
    }

})
