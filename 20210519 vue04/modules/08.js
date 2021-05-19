// 引入Vue
import Vue from 'vue';
// 引入Vuex 
import Vuex from 'vuex';

// 1、引入安装
Vue.use(Vuex);

// 2、创建store对象
let store = new Vuex.Store({
    // 创建数据
    state: {
        msg: 'this is store',
        num: 0
    },
    // 计算属性数据

    // 同步消息
    mutations: {
        // +3
        addNum(state) {
            // console.log('addNum',arguments);
            state.num += 3;
        },
        // -5
        reduceNum(state) {
            // console.loog(arguments);
            state.num -= 5;
        },
        // 重置
        resetNum(state) {
            state.num = 0;
        }
    },

    // 异步消息
    actions: {
        resetNum(store) {
            console.log('actions', arguments);
            setTimeout(() => {
                // state的数据修改只能在同步任务中执行
                // store.state.num = 0;
                store.commit('resetNum');
            }, 2000)
        }
    },

    // modules
});
// console.log(Vuex);
// 声明两个子组件
let child = Vue.extend({
    template: '#child',
    // 创建完毕
    created() {
        console.log('child', this);
    },

})
let other = Vue.extend({
    template: '#other',
    // 创建完毕
    created() {
        console.log('other', this);
    },
})

// 构建应用
const app = new Vue({
    // 3、注册store对象
    // store: store,
    store,
    // 视图
    el: '#app',
    // 数据
    data: {
        num: 1
    },
    // 注册组件
    components: {child, other},
    // 创建完毕
    created() {
        console.log('app', this);
    },
    methods: {
        addNum() {
            // 改变的是store对象中的state
            // 不要直接修改
            // this.$store.state.num += 3;
            // 需要通过同步任务来执行
            // this.$store.commit('addNum', 1, 2, true);
            // commit有两个参数： 1、发布的消息名称， 2、传递的数据
            this.$store.commit('addNum', [1, 2, true]);
        }
    },
})