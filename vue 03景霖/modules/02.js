//引入vue
import Vue from 'vue';
//引入样式
import '../scss/02.scss';
//实例化对象
let app = new Vue({
    //绑定视图
    el:'#app',
    //绑定 模型
    data: {
        nums:[1,2,3,4,5],
    },
    //方法
    methods: {
        //切换显示状态
        toggle() {
            this.nums = this.nums.sort(() => Math.random() > 0.5 ? -1 : 1)

        },
        //添加数字
        add() {
            //获取要生成饿肚肚数字
            let num = this.nums.length + 1;
            //插到数组中随机位置
            this.nums.splice(this.getIndex(),0,num);
        },
        getIndex() {
            return Math.round(Math.random() * this.nums.length);
        }
    }
})