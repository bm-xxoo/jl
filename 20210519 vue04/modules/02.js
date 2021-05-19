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
        // 父组件向子组件传递消息有两种方式，1 属性---props 2 $parent 强耦合
        // 1、利用这个parents属性直接给父组件进行赋值
        // this.$parent.msg = 'i love you';

        // 2、利用事件的触发
        this.$parent.$emit('demo', this.msg);
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
    // 创建完毕
    created() {
        console.log(this);

        // 订阅一个消息
        this.$on('demo', (msg, ...args) => {
            console.log('$on', args);
            this.msg = msg;
        })
    },
})