# 3.vue-cli相关内容
## 3.1 .vue文件封装打包
npm install --save-dev vue-loader vue-template-compiler
需插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
 plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
## 3.2 安装vue脚手架
    npm install -g @vue/cli
## 3.3 vue程序运行过程
runtime-compiler：
template->ast(abstract syntex tree)->render->vdom->UI(真实DOM)
runtime-only：
render->vdom->UI(真实DOM)
## 3.4 安装插件以使用
vue.use(插件)
## 3.5 vue-router
<!--router-link-->
to属性，用于指定跳转路径   
tag属性可以指定router-link之后渲染成什么组件
replace属性，相当于使用replaceState去跳转路径（不会有前后退选项）
active-class属性，当<!--router-link-->对应的路由匹配成功时，会自动给当前元素设置一个router-link-active的class，设置active-class可以修改默认的名称，也可在router实例里直接添加linkActiveClass属性进行自定义
$router是vue-router给每个组件添加的属性，push方法同history.pushState,replace方法同于replaceState
vue-router的父传子可以用props，也可以用$route（与$router有区别），$route可获得当前活跃路由