// 引入vue
import Vue from 'vue';
// 实例化对象
let app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        msg: '<a>我爱你</a>',
        title: '斑码教育',
        flag: true,
    },
    // 定义方法
    methods: {
        toggle() {
            this.flag = !this.flag;
        }
    },
    // 局部定义
    directives: {
        bmShow(el, binding, vnode) {
            if (binding.value) {
                el.style.display = '';
            } else {
                el.style.display="none"
            }
        }
           
    }
})

console.log(app);