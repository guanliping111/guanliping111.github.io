(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{413:function(t,s,a){"use strict";a.r(s);var n=a(30),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"E:\\workspace\\gitwork\\learn-1\\js\\prototype-chain\\原型链2.png",alt:"原型链2"}}),t._v(" "),a("h2",{attrs:{id:"什么是原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是原型"}},[t._v("#")]),t._v(" 什么是原型")]),t._v(" "),a("h6",{attrs:{id:"其实原型的概念很简单："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其实原型的概念很简单："}},[t._v("#")]),t._v(" 其实原型的概念很简单：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("所有对象都有一个属性 "),a("code",[t._v("__proto__")]),t._v(" 指向一个对象，也就是原型")])]),t._v(" "),a("li",[a("p",[t._v("每个对象的原型都可以通过 "),a("code",[t._v("constructor")]),t._v(" 找到构造函数，构造函数也可以通过 "),a("code",[t._v("prototype")]),t._v(" 找到原型")])]),t._v(" "),a("li",[a("p",[t._v("所有函数都可以通过 "),a("code",[t._v("__proto__")]),t._v(" 找到 "),a("code",[t._v("Function")]),t._v(" 对象")])]),t._v(" "),a("li",[a("p",[t._v("所有对象都可以通过 "),a("code",[t._v("__proto__")]),t._v(" 找到 "),a("code",[t._v("Object")]),t._v(" 对象")])]),t._v(" "),a("li",[a("p",[t._v("对象之间通过 "),a("code",[t._v("__proto__")]),t._v(" 连接起来，这样称之为原型链。当前对象上不存在的属性可以通过原型链一层层往上查找，直到顶层 "),a("code",[t._v("Object")]),t._v(" 对象")]),t._v(" "),a("p",[t._v("补充一下基本概念：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("prototype")]),t._v("：这是一个显式原型属性，只有函数才拥有该属性。无论什么时候，只要创建了一个新的"),a("strong",[t._v("函数")]),t._v("，就会根据一个特定的规则为该函数创建一个"),a("code",[t._v("prototype")]),t._v("属性。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("prototype是如何产生的")]),t._v(" ： 当我们声明一个函数时，它被自动创建。并且这个属性的值是一个对象（也就是原型），只有一个属性 "),a("code",[t._v("constructor")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//constructor 对应着构造函数，也就是 Foo")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("constructor")]),t._v(": 是一个公有且不可枚举的属性。一旦我们改变了函数的 "),a("code",[t._v("prototype")]),t._v(" ，那么新对象就没有这个属性了（当然可以通过原型链取到 "),a("code",[t._v("constructor")]),t._v("）。")])]),t._v(" "),a("li",[a("p",[a("em",[a("strong",[t._v("proto")])]),t._v(": 这是每个对象都有的隐式原型属性，指向创建该对象的构造函数的原型。该属性指向prototype.")])]),t._v(" "),a("li",[a("p",[t._v("首先引擎创建了 "),a("code",[t._v("Object.prototype")]),t._v(" ，然后创建了 "),a("code",[t._v("Function.prototype")]),t._v(" ，并且通过 "),a("code",[t._v("__proto__")]),t._v(" 将两者联系了起来。")])])])])]),t._v(" "),a("h2",{attrs:{id:"关于object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于object"}},[t._v("#")]),t._v(" 关于Object")]),t._v(" "),a("h4",{attrs:{id:"object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" Object:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("几乎所有对象都是Object类型的实例，他们都会从"),a("code",[t._v("Object.prototype")]),t._v("继承属性和方法。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Object，Array，String, Boolean")]),t._v("内置一个类（构造函数)，既然他是构造函数 就有 "),a("code",[t._v("prototype")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("Object的类对象: String (文本)、Number(数字)、Boolean(是与非)、Array(数组)、Date(日期)、Error(错误)")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("obj.[[Prototype]]")]),t._v(" 用于指向 obj 的原型，"),a("code",[t._v("[[Prototype]]")]),t._v("从es6开始可以通过 "),a("code",[t._v("Object.getPrototypeOf()")]),t._v(" 和 "),a("code",[t._v("Object.setPrototypeOf()")]),t._v(" 来访问，等同于 "),a("code",[t._v("__proto__")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("不应与 构造函数 func 的 "),a("code",[t._v("prototype")]),t._v(" 相混淆。被构造函数创建的实例对象的"),a("code",[t._v("[[Prototype]]")]),t._v(" 指向 func 的 "),a("code",[t._v("prototype")]),t._v(" 属性。")])])]),t._v(" "),a("h4",{attrs:{id:"object-构造函数的方法："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-构造函数的方法："}},[t._v("#")]),t._v(" Object 构造函数的方法：")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("Object.assign()")]),t._v("：复制一个或多个对象 -> 创建新对象")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Object.create()")]),t._v(":指定的原型对象和属性 ->创建新对象")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Object.getPrototypeOf()")]),t._v("：返回指定对象的原型对象")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Object.setPrototypeOf()")]),t._v("：设置对象的原型")])])]),t._v(" "),a("h4",{attrs:{id:"实现object-create"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现object-create"}},[t._v("#")]),t._v(" 实现Object.create()")]),t._v(" "),a("p",[a("code",[t._v("Object.create()")]),t._v("方法创建一个新对象，使用现有的对象来提供新创建的对象的"),a("code",[t._v("__")]),t._v("proto__.")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("proto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("obj")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" proto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("obj")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" demo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" aa "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("craate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h2",{attrs:{id:"怎么描述原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么描述原型链"}},[t._v("#")]),t._v(" 怎么描述原型链")]),t._v(" "),a("p",[t._v("每一个实例对象("),a("code",[t._v("object")]),t._v(") 都有一个私有属性("),a("code",[t._v("__proto__")]),t._v(") 指向它的构造函数的原型对象("),a("code",[t._v("prototype")]),t._v(").该原型对象("),a("code",[t._v("prototype")]),t._v(")又有自己的原型对象("),a("code",[t._v("__proto__")]),t._v("), 层层向上寻找直到原型对象为null结束。")]),t._v(" "),a("h2",{attrs:{id:"关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关系"}},[t._v("#")]),t._v(" 关系")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("Object")]),t._v(" 是所有对象的爸爸，所有对象都可以通过 "),a("code",[t._v("__proto__")]),t._v(" 找到它")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Function")]),t._v(" 是所有函数的爸爸，所有函数都可以通过 "),a("code",[t._v("__proto__")]),t._v(" 找到它")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Function.prototype")]),t._v(" 和 "),a("code",[t._v("Object.prototype")]),t._v(" 是两个特殊的对象，他们由引擎来创建")])]),t._v(" "),a("li",[a("p",[t._v("除了以上两个特殊对象，其他对象都是通过构造器 "),a("code",[t._v("new")]),t._v(" 出来的")])]),t._v(" "),a("li",[a("p",[t._v("函数的 "),a("code",[t._v("prototype")]),t._v(" 是一个对象，也就是原型")])]),t._v(" "),a("li",[a("p",[t._v("对象的 "),a("code",[t._v("__proto__")]),t._v(" 指向原型， "),a("code",[t._v("__proto__")]),t._v(" 将对象和原型连接起来组成了原型链")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//都为true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[t._v("JavaScript 世界万物诞生记：https://zhuanlan.zhihu.com/p/22989691")]),t._v(" "),a("p",[t._v("阮一峰的ES6入门：https://es6.ruanyifeng.com/#docs/class-extends")]),t._v(" "),a("p",[t._v("深度解析原型：https://github.com/KieSun/Dream/issues/2")])])}),[],!1,null,null,null);s.default=e.exports}}]);