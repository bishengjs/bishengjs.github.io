<h1>为什么选择毕昇 <small>Why BiSheng.js</smaLL></h1>
<hr>

<p>
  <div class='gallery' id='chart'></div>
</p>

*色彩来自 <http://brandcolors.net/>*

<script src="http://strongriley.github.io/d3/d3.js?2.2.0"></script>
<script src="http://strongriley.github.io/d3/d3.layout.js?2.2.0"></script>
<link href='why-banner.css' rel='stylesheet' type='text/css' />
<script src="why-banner.js"></script>

## 文前

这篇文章主要整理本人对前端开发模式变迁的理解，和在学习数据双向绑定过程中的体悟，简要介绍业内流行作品的原理，以及相较之下 BiSheng.js 的亮点。

<!-- 
BiSheng.js 
* 只有一个核心接口。
* 除了 Handlebars.js，没有任何需要重新学习的语法。
* 没有任何其他的约束。
在项目中实施 BiSheng.js，只有一点要求：会使用 Handlebars.js。
 -->

## 可以用 140 个字概述这篇文章吗？

如果您时间不够，下面是这篇文章的摘要，只有一条 tweet 的长度：

## 事件驱动编程

一直以来，JavaScript 应用程序都是由**事件驱动**的。从烂熟于心的 DOM 事件，发展到 HTML5 的 popstate/hashchange 事件，以及现在广泛应用的自定义事件，驱动着框架、库和业务场景的运行。相应的开发过程称为“事件驱动编程”。

    var el = document.getElementById('outside');
    el.addEventListener('click', function modifyText(event) {
        // ...
    }, false);

在浏览器事件模型的基础上，jQuery 封装了浏览器差异，并提供了更加强大的功能（例如事件代理），和更友好的开发体验（例如符合直觉的 API）。

    $( '#dataTable tbody' ).on( 'click', 'tr', function() {
      alert( $( this ).text() );
    });

发展至 MVC 模型（例如 Backbone），则系统地规范（或约定）了事件的编写格式（以及模型和视图）。

    Backbone.View.extend({
      events: {
          'click .icon':          'open',
          'click .button.edit':   'openEditDialog',
          'click .button.delete': 'destroy'
      }
    })

然而，无论是 jQuery 还是 MVC 模型，就像前面两段代码示例，在开发和运行时，都天然地会与 DOM 结构耦合在一起：先用选择器查找 DOM 元素，再绑定或响应事件，进而实现业务逻辑。这样，在开发过程中，前端攻城师需要同步关注 DOM 结构、事件模型、数据模型（和体现前端价值的业务场景）。

直到 MVVM 模型在前端的应用，通过对 DOM 结构、事件模型和数据模型进一步封装和约定，把关注点（即开发工作量）从 MVC 的 View，转移到了 MVVM 的 ViewModel。而 AngularJS 和 Ember.js 则更进一步，自动在 DOM 结构与事件模型、数据模型之间建立映射关系，以数据（事件也作为数据的一部分）来驱动应用程序的运行。相应的开发过程称为“数据驱动开发”。

    <!-- AngularJS -->
    <form ng-submit="addTodo()">
        <input type="text" ng-model="todoText">
        <input type="submit" value="add">
    </form>

    <!-- Ember.js -->
    {{input type="text" id="new-todo" action="createTodo"}}

> 顺带提一句：在应用程序的设计过程中，前端与后端的交互采用 JSON 为传输格式，从而实现彼此独立开发。从项目管理的角度看，也是用数据驱动前端开发。这种结构很容易理解和实施。

## 数据驱动开发

> 表示原则：把知识叠入数据以求逻辑质朴而健壮。---《Unix 编程艺术》

数据驱动开发是指，基于数据层，通过定义（采集、统计）、显示、维护数据（增加、删除、修改），来完成开发过程。

> 从原理上说，数据驱动是以自定义的数据事件来驱动 DOM 更新，所以也算是事件驱动的一种，不过与传统的 DOM 事件驱动在思路和实现上迥然不同，所以，理论上的争辩实无甚意义，各位了解即可。

前端应用程序应该以数据为中心，而不应该以处理和展现为中心。因为数据结构是稳定、唯一的，而业务和展现则是多变、多场景的。

> 数据要比编程逻辑更容易驾驭。所以接下来，如果要在复杂数据和复杂代码中选择一个，宁愿选择前者。更进一步：在设计中，你应该主动将代码的复杂度转移到数据之中去。---《Unix 编程艺术》

在下面的 [Ember.js 官方示例](http://emberjs.com/guides/getting-started/using-other-adapters/) 中，完全看不到有关 DOM 操作和事件绑定代码，而是基于 Handlebars.js 模板，自动执行数据绑定和事件绑定，自动更新 DOM 元素，实现业务逻辑。

<iframe src="http://jsbin.com/aZIXaYo/1/embed?live" class="jsbin-embed" style="border: 1px solid rgb(170, 170, 170); width: 100%; min-height: 600px;"></iframe>

类似 AngularJS 和 Ember.js 这样的框架，除了支持数据绑定和事件绑定之外，也引入了远超这些优点的编码约定，学习成本和对既有架构的冲击甚大，实施时需谨慎权衡。BiSheng.js 正是基于这种考量，只实现了数据双向绑定，希望可以单独使用，也可以轻量地集成到既有的框架和库中。在接下来介绍 BiSheng.js 时会看到这一点。

## 同类作品

### AngularJS

['$watch How the $apply Runs a $digest', 'http://angular-tips.com/blog/2013/08/watch-how-the-apply-runs-a-digest/']

### Ember.js

### BiSheng.js

关于 BiSheng.js 的实现原理，您可以在 [How BiSheng.js works](http://bishengjs.com/doc/how.html) 看到详细的设计过程和原理分析。不过，建议您先读下去，看看 BiSheng.js 的 API 和用法，再回来看它的实现原理。

## BiSheng.js

BiSheng.js 是一款小巧轻便的数据双向绑定库，旨在帮助前端攻城师快速开发Web组件和应用。支持所有主流浏览器（包括 IE6），可以单独使用，也可以方便地集成到第三方框架。目前基于模板引擎 Handlebars.js 实现，可扩展支持其他基于语法树的模板引擎。

BiSheng.js 的 API 很简洁，共计有 5 个方法：

* BiSheng.bind(data, tpl, callback)
* BiSheng.unbind(data, tpl)
* BiSheng.watch(data, properties, fn(change))
* BiSheng.unwatch(data, fn)
* BiSheng.apply(fn)

> `BiSheng` 是唯一的入口对象。

方法 `BiSheng.bind(data, tpl, callback)` 和 `BiSheng.unbind(data, tpl)` 用于在 HTML 模板 `tpl` 和数据 `data` 之间执行绑定和解绑定。

方法 `BiSheng.watch(data, properties, fn(change))` 和 `BiSheng.unwatch(data, fn)` 用于为数据 `data` 绑定和移除属性监听函数 `fn`。

方法 `BiSheng.apply(fn)` 用于包裹对数据的操作，内部会检查数据的变化，并自动同步到视图。

您可以在 [BiSheng API](http://bishengjs.com/doc/bisheng.html) 看到详细的说明和示例。

前端页面的场景可以归纳为四种：

* 表达式
* 逻辑块
* HTML 属性
* 表单

下面看看如何把 BiSheng.js 实施这些场景中。

### 表达式

    {{foo}}

### 逻辑块

    {{#with story}}{{{intro}}}{{/with}}

### HTML 属性

    <span title="{{title}}">{{title}}</span>

### 表单

    <input class="form-control" value="{{first}}">


<!-- 
传统的开发方式、关注点
    * 表单
        * 最简单的只有一个输入框的表单
    * 表格 Grid
        * 
    * 以 TodoMVC 为例
什么是数据驱动？
如何提升效率？
    * Code Lines
    * 
 -->

BiSheng.js 的设计和开发实践了以下这些 Unix 原则：

* 模块原则：使用简洁的接口拼合简单的部件。
* 透明性原则：健壮源于透明与简介。
* 表示原则：把知识叠入数据以求逻辑质朴而健壮。
* 通俗原则：接口设计避免标新立异。
* 经济原则：宁花机器一分，不花程序一秒。
* 扩展原则：设计着眼未来，未来总比预想来得快。

无论你是谁，遇到什么不爽的地方，欢迎来砸砖。


## 同类作品

### AngularJS

<iframe src="http://ghbtns.com/github-btn.html?user=angular&repo=angular.js&type=watch&count=true&size="
  allowtransparency="true" frameborder="0" scrolling="0" width="125" height="30"></iframe>

<iframe src="http://ghbtns.com/github-btn.html?user=angular&repo=angular.js&type=fork&count=true&size="
  allowtransparency="true" frameborder="0" scrolling="0" width="125" height="30"></iframe>

[AngularJS — Superheroic JavaScript MVW Framework](http://angularjs.org/)