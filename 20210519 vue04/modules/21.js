//引入VUe
import Vue from 'vue';
//实例化对象
const app = new Vue({
    //视图
    el:"#app",
    //模型
    data:{
        msg:'hello'
    },
    //创建完毕
    created() {
        //订阅一个消息
        this.$on('demo',(msg,...args) => {
            this.msg = msg;
        })

        //做一个异步任务  2秒后触发
        setTimeout(() => {
            this.$emit("demo",1,2,3,4);
        },2000)
    },
    //方法
    methods: {
        xxoo() {
            console.log('xxoo',arguments);
        }
    }
})