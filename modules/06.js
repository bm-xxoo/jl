//引入Vue
import Vue from 'vue';
import './06.scss';

//构建应用
let app = new Vue({
    //视图
    el:'#app',
    //模型
    data:{
        title:'<b>hello EveryBodys</b>'
    }
})
setTimeout(() => {
    app.title = '我爱你们！！！！！';
},2000)