//引入vue
import Vue from 'vue';
//构建应用
let app = new Vue({
    //视图
    el:'#app',
    //模型
    data:{
        title:'hello',
        books:['喜羊羊与灰太狼','熊出没','百变机兽之洛洛历险记'],
        person:{
            name:'张三',
            sex:'男'
        },
        xxoo:''
    },
})

//修改普通值
// app.title = 'i miss you';

//1 数组中基础值类型
// app.books[1] = '三国演义';
//更新整个数组
// app.books = ['这本书能让你戒烟','道德经','论语'];

//2 数组中新增的至
// app.books.push('鬼谷子');
// app.books[3] = '鬼谷子';//有问题  按理来说不好使 可是我的好使
// app.books[1] = '三国演义';//按理说应该丢失 可是我的还是没丢失
//3 对象新增的属性
// app.person.age = 18;//按理来说 不好使 可是我的好使
//更新整个对象
// app.person = {
//     name:'张三',
//     sex:'男',
//     age:11
// }

//4 未初始化的数据
// app.xxoo = 'ooxx';

//使用set方法
app.$set(app.books,3,'这本书能让你快乐');
app.$set(app.person,'age',22);
console.log(app);

