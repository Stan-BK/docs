(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{356:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_1-vue指令基本内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue指令基本内容"}},[t._v("#")]),t._v(" 1.vue指令基本内容")]),t._v(" "),s("h2",{attrs:{id:"_1-1-vue指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-vue指令"}},[t._v("#")]),t._v(" 1.1 vue指令")]),t._v(" "),s("p",[t._v("指令 (Directives) 是带有 v- 前缀的特殊 attribute。\n指令 attribute 的值预期是单个 JavaScript 表达式 (v-for 是例外情况，稍后我们再讨论)。\n指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。\n一些指令能够接收一个“参数”，在指令名称之后以冒号表示。从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数")]),t._v(" "),s("h2",{attrs:{id:"_1-2-代码规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-代码规范"}},[t._v("#")]),t._v(" 1.2 代码规范")]),t._v(" "),s("p",[t._v("代码规范：缩进2个空格")]),t._v(" "),s("h2",{attrs:{id:"_1-3-mustache语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-mustache语法"}},[t._v("#")]),t._v(" 1.3 Mustache语法")]),t._v(" "),s("p",[t._v("Mustache(双大括号)\nMustache内的数据是响应式的\nMustache语法中可以写变量也可以写简单的表达式")]),t._v(" "),s("h2",{attrs:{id:"_1-4-v-once"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-v-once"}},[t._v("#")]),t._v(" 1.4 v-once")]),t._v(" "),s("p",[t._v("只渲染元素和组件一次，随后的渲染，使用了此指令的元素/组件及其所有的子节点，都会当作静态内容并跳过，不会随着数据的改变而改变，这可以用于优化更新性能。")]),t._v(" "),s("h2",{attrs:{id:"_1-5-v-html和v-text"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-v-html和v-text"}},[t._v("#")]),t._v(" 1.5 v-html和v-text")]),t._v(" "),s("p",[t._v("v-html：双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 v-html 指令：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Using mustaches: {{ rawHtml }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Using v-html directive: "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-html")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rawHtml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("v-text（一般不用）：将数据显示在界面中，通常情况下接受一个string类型")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Using mustaches: {{ rawHtml }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Using v-text directive: "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rawHtml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"_1-6-v-cloak-cloak-斗篷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-v-cloak-cloak-斗篷"}},[t._v("#")]),t._v(" 1.6 v-cloak cloak（斗篷）")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("<style>\n[v-cloak]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n</style>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-cloak")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("在vue解析之前，div中有一个属性v-cloak，\n在vue解析之后，div中没有该属性(vue会将其删除)\n作用：可防止在vue渲染元素前后，该元素展现方式的改变跳动")]),t._v(" "),s("h2",{attrs:{id:"_1-7-v-pre"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-v-pre"}},[t._v("#")]),t._v(" 1.7 v-pre")]),t._v(" "),s("p",[t._v("用于跳过这个元素和它子元素的编译过程，用于显示原本的Mustache语法")]),t._v(" "),s("h2",{attrs:{id:"_1-8-v-if和v-show"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-v-if和v-show"}},[t._v("#")]),t._v(" 1.8 v-if和v-show")]),t._v(" "),s("p",[t._v("v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。可接v-else或v-else-if。\nv-show 另一个用于根据条件展示元素的选项是 v-show 指令。用法与v-if大致一样，不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS property display。\n两者比较：v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。\nv-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。\n相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。\n一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。\n不推荐同时使用 v-if 和 v-for。当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。")]),t._v(" "),s("h2",{attrs:{id:"_1-9-v-for"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-v-for"}},[t._v("#")]),t._v(" 1.9 v-for")]),t._v(" "),s("p",[t._v('我们可以用 v-for 指令基于一个数组来渲染一个列表。v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名。\n在 v-for 块中，我们可以访问所有父作用域的 property。v-for 还支持一个可选的第二个参数，即当前项的索引。(item, index) in items。\n也可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法。\n可以用 v-for 来遍历一个对象的 property。value in object。也可以提供第二个的参数为 property 名称 (也就是键名)(value, name) in object。--与JS中的for in相反\n可以用第三个参数作为索引。(value, name, index) in object\n为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key attribute。:key="item.id"。建议尽可能在使用 v-for 时提供 key attribute，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。\nv-for 也可以接受整数。在这种情况下，它会把模板重复对应次数。n in 10')]),t._v(" "),s("h2",{attrs:{id:"_1-10-v-on"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-10-v-on"}},[t._v("#")]),t._v(" 1.10 v-on")]),t._v(" "),s("p",[t._v("当通过methods中定义方法，以供@click调用时，需要注意参数问题：\n情况一：如果该方法不需要额外参数，那么方法后的（）可以不添加，\n但是注意：如果方法本身中有一个参数，那么会默认将原生事件event参数传递过去。\n情况二：如果需要同时传入某个参数，同时需要event时，可以通过$event传入事件。\n可以用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。\n事件修饰符,修饰符可以串联修饰符是由点开头的指令后缀来表示的。\n.stop 阻止事件继续传播\n.prevent 取消默认事件\n.capture 添加事件监听器时使用事件捕获模式\n.self 只当在 event.target 是当前元素自身时触发处理函数\n.once 事件将只会触发一次\n.passive 事件的默认行为将会立即触发\n警告：不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，同时浏览器可能会向你展示一个警告。请记住，.passive 会告诉浏览器你不想阻止事件的默认行为。\n按键修饰符vue 允许为 v-on 在监听键盘事件时添加按键修饰符,可以直接将 KeyboardEvent.key 暴露的任意有效按键名转换为 kebab-case 来作为修饰符")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("keyup.page-down")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onPageDown"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("在上述示例中，处理函数只会在 $event.key 等于 PageDown 时被调用。\n系统修饰键\n可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。\n.ctrl\n.alt\n.shift\n.meta\n.exact 修饰符,.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"<"}},[t._v("&lt;")]),t._v(" 即使 Alt 或 Shift 被一同按下时也会触发 "),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:">"}},[t._v("&gt;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click.ctrl")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onClick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("A"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"<"}},[t._v("&lt;")]),t._v(" 有且只有 Ctrl 被按下的时候才触发 "),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:">"}},[t._v("&gt;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click.ctrl.exact")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onCtrlClick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("A"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"<"}},[t._v("&lt;")]),t._v(" 没有任何系统修饰符被按下的时候才触发 "),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:">"}},[t._v("&gt;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click.exact")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onClick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("A"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("鼠标按钮修饰符\n.left\n.right\n.middle\n为什么在 HTML 中监听事件？\n你可能注意到这种事件监听的方式违背了关注点分离 (separation of concern) 这个长期以来的优良传统。但不必担心，因为所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上，它不会导致任何维护上的困难。\n实际上，使用 v-on 有几个好处：\n1.扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法。\n2.因为你无须在 JavaScript 里手动绑定事件，你的 ViewModel 代码可以是非常纯粹的逻辑，和 DOM 完全解耦，更易于测试。\n3.当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何清理它们。")])])}),[],!1,null,null,null);a.default=e.exports}}]);