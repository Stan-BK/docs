# 2.vue相关属性内容
## 2.1 表单输入绑定
你可以用 v-model 指令在表单 <!--input-->、<!--textarea--> 及 <!--select--> 元素上创建双向数据绑定。
它会根据控件类型自动选取正确的方法来更新元素。
v-model 会忽略所有表单元素的 value、checked、selected attribute 的初始值而总是将 Vue 实例的数据作为数据来源。
你应该通过 JavaScript 在组件的 data 选项中声明初始值。
v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：
text 和 textarea 元素使用 value property 和 input 事件；
checkbox 和 radio 使用 checked property 和 change 事件；
select 字段将 value 作为 prop 并将 change 作为事件。
修饰符
.lazy
在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。
你可以添加 lazy 修饰符，从而转为在 change 事件_之后_进行同步
.number
如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符
.trim
如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符
## 2.2 简写
v- 前缀作为一种视觉提示，用来识别模板中 Vue 特定的 attribute。
当你在使用 Vue.js 为现有标签添加动态行为 (dynamic behavior) 时，v- 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。同时，在构建由 Vue 管理所有模板的单页面应用程序 (SPA - single page application) 时，v- 前缀也变得没那么重要了。
因此，Vue 为 v-bind 和 v-on 这两个最常用的指令，提供了特定简写:
v-bind 缩写
```html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a :[key]="url"> ... </a>
```
v-on 缩写
```html
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
```
## 2.3 计算属性
计算属性一般没有set方法
Vue 知道 vm.reversedMessage 依赖于 vm.message，因此当vm.message 发生改变时，所有依赖 vm.reversedMessage 的绑定也会更新。
（计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。）
而且最妙的是我们已经以声明的方式创建了这种依赖关系：计算属性的 getter 函数是没有副作用 (side effect) 的，这使它更易于测试和理解
```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```
```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```
计算属性默认只有 getter，不过在需要时你也可以提供一个 setter：
```js
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```
## 2.4 Class 与 Style 绑定
绑定 HTML Class（对象语法，数组语法，用在组件上）
绑定内联样式（对象语法，数组语法，自动添加前缀（当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS property 时，如 transform，Vue.js 会自动侦测并添加相应的前缀。）、多重值（可以为 style 绑定中的 property 提供一个包含多个值的数组，常用于提供多个带前缀的值，只会渲染数组中最后一个被浏览器支持的值））
## 2.5 key属性 
用 key 管理可复用的元素（Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”）
```html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```
以上代码若未添加key attribute，则在渲染时不会清除用户已输入内容，因为input元素相同，可复用，添加key后则会在渲染时清除用户已输入内容
## 2.6 组件
因为组件是可复用的 Vue 实例，所以它们与 new Vue 接收相同的选项，例如 data、computed、watch、methods 以及生命周期钩子等。
仅有的例外是像 el 这样根实例特有的选项。
```js
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
```
组件是可复用的 Vue 实例，且带有一个名字：在这个例子中是 <!--button-counter-->。
我们可以在一个通过 new Vue 创建的 Vue 根实例中，把这个组件作为自定义元素来使用：
```html
<div id="components-demo">
  <button-counter></button-counter>
</div>
```
```js
new Vue({ el: '#components-demo' })
```
组件可复用，且每个组件都会各自独立维护它的内部data。
data 必须是一个函数！如果 Vue 没有这条规则，触发一个实例变动就会影响到其它所有实例。

组件的组织
有两种组件的注册类型：全局注册和局部注册。
全局注册的组件可以用在其被注册之后的任何 (通过 new Vue) 新创建的 Vue 根实例，也包括其组件树中的所有子组件的模板中。

通过 Prop 向子组件传递数据
Prop 是你可以在组件上注册的一些自定义 attribute。
当一个值传递给一个 prop attribute 的时候，它就变成了那个组件实例的一个 property。
一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop。在上述模板中，你会发现我们能够在组件实例中访问这个值，就像访问 data 中的值一样。
## 2.7 数组中能做到响应式的方法
1.push
2.prop
3.shift
4.unshift
5.splice
6.sort
7.reverse
8.Vue.set(vue内部定义方法参数：要修改对象，索引值，修改后的值)
## 2.8 父子组件的通信
通过props向子组件传递数据
通过事件向父组件发送信息$emit
```html
<template id='cpn1'>
  <div>
    <ul>
      <li v-for='item in cmovies'>{{cmovies}}</li>
    </ul>
  </div>
</template>
<div id='app'>
  <cpn :cmovies='movies'></cpn>//此处bind绑定的属性不支持驼峰命名法
</div>
```
```js
const cpn = {
  template:'#cpn1',
  //props:['cmovies']//第一种写法（数组）
  props:{
    //1.类型限制
      //comives:Array
    //2.添加默认值
      cmovies:{
        type:Array,
        default:'aaaaa',
        required:true //要求必需传入该值
      }
  }，
  data(){
    return{
      name:'aaa'
    }
  }
}
const vm = new Vue(
  el:'#app',
  data:{
    message:'wbk',
    movies:[11,22]
  },
  components:{
    cpn
  }
)
```
父组件可以通过$children访问子组件对象（取得的是一个子组件对象合集）
也可通过$refs（使用率较高）取得（需在相应子组件标签上添加ref特性）
```html
<cpn ref='aaa'></cpn>
```
子组件可以通过$parent访问子组件对象，通过$root访问根组件
## 2.9 插槽slot
```html
<template id='cpn1'>
  <div>
    <ul>
      <li v-for='item in cmovies'>{{cmovies}}</li>
    </ul>
  </div>
  <slot></slot>
</template>
```
```js
const cpn = {
  template:'#cpn1'
}
```
```html
<cpn>(此处填写内容将视为插槽内容)</cpn>
```
插槽内容可以有默认值，一旦使用组件时有填充内容则会覆盖其默认值
具名插槽：<!--slot name=''></slot--> 此时要使用插槽需要给填充内容标签绑定v-slot特性，注意 v-slot 只能添加在 <!--template--> 上 (只有一种例外情况)，这一点和已经废弃的 slot attribute 不同。
```html
<template id='cpn1'>
  <slot name='slot'></slot>
</template>
<cpn><span v-slot=slot></span></cpn>
```