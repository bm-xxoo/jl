//引入
import Vue from 'vue';

//声明一个组件
const child = Vue.extend({
    //模板
    template: `
        <div>
            <h1>child part</h1>
            <h2>{{msg}}</h2>
        </div>
    `,
    //数据
    data() {
        return {
            msg:'child component'
        }
    },
    //创建完毕
    created() {
        this.$parent.$emit('demo',this.msg);
    }
});
//实例化对象
const app = new Vue({
    //视图
    el:'#app',
    //模型
    data: {
        msg:'hello'
    },
    //注册子组件
    components:{child},
    //创建完毕
    created() {
        //订阅一个消息
        this.$on('demo',(msg, ...args) => {
            this.msg = msg;
        })
    }
})