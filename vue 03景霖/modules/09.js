//引入vue
import Vue from 'vue';
//2 定义组件类
const child = Vue.extend({
    // props:['name','msg','parentMsg'],
    // 2、属性值为对象
    props: {
        // key就是你要接收的属性名， value值有三种情况
        // 1、value值为系统构造函数
        name: Number, // 进行类类型约数
        // 2、value值为数组
        msg: [String, Number],
        // 3、value值为一个对象
        parentMsg: {
            // type属性修饰类型
            type: Number | String,
            // 默认值
            // default: '默认值',
            // default: () => 'i miss you',
            default() {
                return 'mamalihong';
            },
            // 必传项
            required: true,
            // 验证器
            validator(value) {
                return value.length >= 5;
                console.log(arguments);
            }

        }
    },
    //末班
    template:`
    <div>
        <h1>子组件</h1>
        <h2>{{msg}}</h2>
        <h3>{{parentMsg}}</h3>
    </div> 
    `,
    data() {
        return {

        }
    },
    //创建完毕
    created() {
        console.log(this);
    }
});

//实例化对象
let app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        msg: '<a>我爱你</a>', 
    },
    // 3、局部注册组件
    components: {
        child,
    },
})