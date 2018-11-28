

# 大纲 #

1. 节点属性
2. 节点操作



# 内容 #

### tab标签切换 ###

```
#tab span{display:inline-block;padding:5px 15px;background-color:#ddd;margin:0 3px;border:1px solid #ddd;border-bottom:none;}
.content{padding:15px;border:1px solid #ddd;font-size:24px;background-color:#efefef;}



<div id="tab"><span>辣条</span><span>豆腐</span><span>方便面</span><span>桂林米粉</span></div>
<div class="content">我喜欢吃辣条</div>
<div class="content">吃完豆腐池辣条</div>
<div class="content">喜欢去超市捏方便面</div>
<div class="content">桂林米粉哪里最正宗</div>

```

## 节点之间的关系 ##

子节点: childNodes

父节点: parentNode

兄弟节点:
    nextSibling
	previousSibling



```
		// 百度元素的上一个【元素】节点
		// 不支持 IE8及以下
		// baidu.previousElementSibling.style.color = "red";

		// 【解决】IE 兼容的问题
		// 只要当前节点不是元素节点，那么一直往上找
		while (google.nodeType != 1) {
			google = google.previousSibling;
		}
```



### 父节点的应用 ###

```
<style>
  a {cursor: pointer;}
</style>

<h1> 今日头条 </h1>

<ul id="ul1">
	<li>我机巡航南海释放重大信号 轰6曾突破日美封锁链  <a>&times;</a></li>
	<li>少林寺自家门口遇假僧：陪NBA球星韦德拜佛的不是我们... <a>&times;</a></li>
	<li>李克强谈互联网+物流：既是发展新经济，又能提升传统.. <a>&times;</a></li>
	<li>这位85后技术男，要实现APP之间的深度链接  <a>&times;</a></li>
	<li>国内两大白帽子关闭 引猜测  <a>&times;</a></li>
</ul>

```


### 手风琴 ###

```
<style>
		.hide{display:none;}

		#div1{border:1px solid #ddd;padding:1px;}
		#div1 h4{margin:1px;background-color:#ddd;padding:15px;}
		#div1 .content{display:none;height:120px;padding:15px;}
</style>

	<div id="div1">
		<h4>标题1</h4>
		<div class="content">#内容1</div>
		<h4>标题2</h4>
		<div class="content">#内容2</div>
		<h4>标题3</h4>
		<div class="content">#内容3</div>
		<h4>标题4</h4>
		<div class="content">#内容4</div>
		<h4>标题5</h4>
		<div class="content">#内容5</div>
	</div>


```


## 节点属性 ##

```
box.attributes;      // 节点中所有属性
box.getAttribute('data-index')  // 获取元素节点属性的值

box.setAttribute('data-index',2); // 设置节点的属性
box.removeAttribute('title') // 移除节点属性
```


### 网页换肤 ###

css 样式表在 css 文件夹
```
<link id="link" href="css/css1.css" rel="stylesheet" type="text/css" />


<dl id="message">
	<form>
		<dt>
			<strong>可以换肤的提交框：</strong>
			<input type="button" value="皮肤1" data-css="css1" />
			<input type="button" value="皮肤2" data-css="css2" />
		</dt>
		<dd>输入姓名：<input class="text" type="text" /></dd>
		<dd>输入密码：<input class="text" type="password" /></dd>
		<dd>请您留言：<textarea></textarea></dd>
		<dd class="center"><input class="btn" type="submit" value="提交" /></dd>
	</form>
</dl>

```


style CSS内联样式属性值

要获取节点 css 的样式值：

IE中可通过 节点对象.currentStyle 来得到 所对应的样式对象

```
var d = document.getElementById("div1");

// 这是div节点的 css 样式中的 width 值
d.currentStyle.width;

// 这是div节点的 css 样式中的 height 值
d.currentStyle.height;
```


如果需要获取 css 样式值， Firefox 和 chrome 中，

可通过 window.getComputedStyle(d, null) 的方式来得到所对应的 样式对象

```

var d = document.getElementById("div1");

// 这是div节点的 css 样式中的 width 值
window.getComputedStyle(d, null).width

// 这是div节点的 css 样式中的 height 值
window.getComputedStyle(d, null).height

```


兼容代码：

```
var d = document.getElementById("div1");

var obj = d.currentStyle || getComputedStyle(d, null);

// 这是div节点的 css 样式中的 width 值
obj.width;

// 这是div节点的 css 样式中的 height 值
obj.height;

```



### 进度条 ###

```
<style>
	#progress{
		position: relative;
		margin: auto;
		top: 200px;
		display: block;
		width: 200px;
		height: 20px;
		border-style: dotted;
		border-width: thin;
		border-color: darkgreen;
	}
	#filldiv{
		position:absolute;
		top: 0px;
		left: 0px;
		width: 0px;
		height: 20px;
		background: blue;
	}
	#percent{
		position: absolute;
		top: 0px;
		left: 200px;
		
	}
</style>


<div id="progress">
	<div id="filldiv"></div>
	<span id="percent">0</span>
</div>

```


## 节点操作方法 ##

DOM 不单单可以查找节点，也可以创建节点、复制节点、插入节点、删除节点和替换节点

```
createElement() //创建一个元素节点
createTextNode()  //创建一个文本节点
box.appendChild(node)  //把node节点插入到box内部最后的位置
box.insertBefore(newNode, existNode)  //把newNode节点插入到exsitNode的前面
box.removeChild(node) // 在box内移除节点
box.replaceChild(p,h1); // h1替换成p

box.cloneNode(true) // 克隆节点

```

### 添加表格 ###

```
	<style>
		table{margin-top:20px;width:100%;border:1px solid #ddd;border-collapse: collapse;}
		td{padding:5px 15px;border:1px solid #ddd;}

		/*css3隔行变色*/
		/*table tr:nth-child(odd){
			background-color:#efefef;
		}*/
		.odd{background-color:#fc0;}
	</style>


行：<input type="text" id="row"> 列：<input type="text" id="col"><button>生成表格</button>
```

### 表格行复制 ###

node.cloneNode(true);

设置为 true，如果您需要克隆节点及其属性，以及后代
设置为 false，如果您只需要克隆节点及其后代









# 经典问题 #


1. 简易日历
单击某个按钮，显示数组中对应的信息


```
<style type="text/css">
* { padding: 0; margin: 0; }
li { list-style: none; }
body { background: #f6f9fc; font-family: arial; }

.calendar { width: 210px; margin: 0 auto; padding: 10px 10px 20px 20px; background: #eae9e9; }
.calendar ul { width: 210px; overflow: hidden; padding-bottom: 10px; }
.calendar li { float: left; width: 58px; height: 54px; margin: 10px 10px 0 0; border: 1px solid #fff; background: #424242; color: #fff; text-align: center; cursor: pointer; }
.calendar li h2 { font-size: 20px; padding-top: 5px; }
.calendar li p { font-size: 14px; }

.calendar .active { border: 1px solid #424242; background: #fff; color: #e84a7e; }
.calendar .active p { font-weight: bold; }

.calendar .text { width: 178px; padding: 0 10px 10px; border: 1px solid #fff; padding-top: 10px; background: #f1f1f1; color: #555; }
.calendar .text h2 {font-size: 14px; margin-bottom: 10px; }
.calendar .text p { font-size: 12px; line-height: 18px; }

</style>


	var arr=['快过年了，大家可以商量着去哪玩吧～',
		'大家好好学习吧222222~~~',
		'大家好好学习吧222222333~~~',
		'大家好好学习吧222444222~~~',
		'大家好好学习555吧222222~~~',
		'大家好好学习吧666222222~~~',
		'大家好好学习吧227772222~~~',
		'大家好好学习吧28888822222~~~',
		'大家好好学习吧99999222222~~~',
		'大家好好学习10000000吧222222~~~',
		'大家好好学习吧111111222222~~~',
		'大家好好学习吧22222200000000000~~~']



<div id="tab" class="calendar">

    <ul id="ul">
        <li class="active"><h2>1</h2><p>JAN</p></li>
        <li><h2>2</h2><p>FER</p></li>
        <li><h2>3</h2><p>MAR</p></li>
        <li><h2>4</h2><p>APR</p></li>
        <li><h2>5</h2><p>MAY</p></li>
        <li><h2>6</h2><p>JUN</p></li>
        <li><h2>7</h2><p>JUL</p></li>
        <li><h2>8</h2><p>AUG</p></li>
        <li><h2>9</h2><p>SEP</p></li>
        <li><h2>10</h2><p>OCT</p></li>
        <li><h2>11</h2><p>NOV</p></li>
        <li><h2>12</h2><p>DEC</p></li>
    </ul>
    
    <div class="text" id="txt">
        <h2>1月活动</h2>
        <p>快过年了，大家可以商量着去哪玩吧～</p>
    </div>

</div>
```





2. 评分效果
    ![](hw1.jpg)

【扩展】 表格即时编辑(需要用到事件冒泡知识)

点击表格内容，可以编辑文本。当光标离开编辑框后，可以将编辑后的内容保存下来




## react+antd  - xsSystem

> 参考项目地址： [react-antd-DEMO-Project](https://github.com/mcya/react-antd-DEMO-Project)

### 验证方式 - 添加一个的登录或者登出的标记, 再在router的中验证。

```js
import Cookies from 'js-cookie' // npm install js-cookie  -  "js-cookie": "^2.1.1"

export const setCookieItem = (name, value) => { //set Cookies
  Cookies.set(name, value);
}
export const getCookieItem = (name) => { //get Cookies
	const value = Cookies.get(name);
	return value === undefined || value === 'undefined' ? null : value;
}
export const removeCookieItem = (name) => { //remove Cookies
  Cookies.remove(name);
}

/*获取缓存在cookie的登录标记*/
export const getUserAuth = () => {
  return getCookieItem(USER_AUTH);
}
/*缓存用户登录后的信息*/
export const cacheLoginInfo = (res) => {
  setCookieItem(USER_AUTH, true);
}
/*session过期或退出登录之后，清除用户登录信息*/
export const cleanLoginInfo = () => {
  Cookies.remove(USER_AUTH);
}
```


```js
function validate(store, [nextState, replace]) { // 在路由群载入时做 filter 处理, 即在 <Route>中都需要调用 validate
  const userInfo = getUserAuth();
  if (!userInfo) {
    cleanLoginInfo();
    replace('/login');
  }
}

const Routes = ({ history, store }) =>
<Router history={history}>

	<Route path="login" getComponent={(location, cb)=> { require.ensure([], require => { cb(null, require('../apps/login')) }, 'login') }} />

		<Route
      path="saleMgr/orderInfo"
      getComponent={(location, cb)=> { require.ensure([], require => { cb(null, require('../apps/saleMgr/orderInfo')) }, 'saleMgr') }}
      onEnter={(...args) => {validate(store, args);}}
    />

    <Route path="/"
      component={App}
      onEnter={(...args) => {validate(store, args);}}
      onChange={(prevState, nextState) => {
        if (nextState.location.action !== 'POP') { window.scrollTo(0, 0);} //路由切换新界面时，重置滚动条位置
      }}
    >
			<IndexRedirect to="workBench" />
      { generateRoutes() }
		</Route>
		
		<Route path="*" component={NotFound} />
</Router>;
```

