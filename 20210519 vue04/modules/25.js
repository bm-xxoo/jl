// 引入Vue
import Vue from 'vue';

// 声明一个组件
const child = Vue.extend({
    props: ['demo'],
    // 模板
    template: '#child',
    // 模型
    data() {
        return {
            msg: 'child component'
        }
    },
    // 创建完毕
    created() {
        // 调用父组件的方法
        this.demo(this.msg);
    },
    // 检测数据变化
    watch: {
        msg() {
           // 调用父组件的方法
            this.demo(this.msg); 
        }
    }
   

});
//声明一个组件
const other = Vue.extend({
    props:['msg'],
    template:'#other',
})
//实例化对象
const app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        msg: 'hello'
    },
    // 注册子组件
    components: {child, other},
    // 创建方法
    methods: {
        xxoo(msg) {
            // 改变父组件的消息内容
            this.msg = msg;
            // 向other组件传递消息
        }
    }

})