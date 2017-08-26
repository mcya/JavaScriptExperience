
# 大纲 #
1. window 对象
2. 回到顶部实现
3. 修改窗口

# 内容 #

## BOM介绍 ##

JavaScript 有3个 组成部分

1. ECMAScript 规定了语法规则
2. BOM  Broswer Object Model 浏览器对象模型
3. DOM  Document Object Model 操作网页上的元素

### 什么是 BOM ###


BOM 是Browser Object Model的缩写，简称浏览器对象模型, 提供了独立于内容而与浏览器窗口进行交互的对象，用于访问浏览器的功能。BOM由一系列相关的对象构成，并且每个对象都提供了很多方法与属性.
JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C, 但是BOM缺乏标准.由于BOM 缺少规范，每个浏览器提供商又按照自己想法去扩展它，那么浏览器共有对象就成了事实的标准。



(1) 可以通过 BOM 进行浏览器的一些操作： 打开窗口，跳转到另外一个网页 等
(2) 运行的一个环境

window是BOM的核心, window对象表示浏览器窗口的一个实例, 每个浏览器窗口都有一个window对象与之对应. 
window对象是BOM的顶层(核心)对象，所有对象都是通过它延伸出来的.

![](BOM.png)


#### 对象创建 ####

```
1. 使用 new 运算符创建 Object 
var box = new Object();        //new方式  
box.name =‘张三’;   	//创建属性字段    
box.age = 18;		//创建属性字段
 

2. 使用字面量方式创建 Object 
var box = {               //字面量方式 
      name :‘张三',   //创建属性字段,最后加逗号 
      age : 18 
};


3. 属性字段也可以使用字符串形式 
   var box={ 
	'name' : '张三', 	//也可以用字符串形式 
	'age' : 28
   };



4.  使用字面量及传统赋值方式 
var box={};		 //字面量方式声明空的对象
box.name='张三'; 	 //点符号给属性赋值
box.age= 18;



5.  两种属性输出方式 
alert(box.age);		 //点表示法输出 
alert(box['age']); 	 //中括号表示法输出，注意引号
```



#### 对象练习 ####

1, 创建一个人的对象, 添加属性: 姓名 年龄 爱好 薪资期望, 并有一个打印自身信息的方法, 可以输出自身信息;



2, 创建一个锤子对象, 有属性:宽,高,重; 方法:可以锤钉子


3, 有一辆50km/h车,跑在一条1000km路上，问多少小时跑完？



## window对象 ##

### window对象的子对象 ###

document(核心): 文档对象，让我们可以在js脚本中直接访问页面元素(DOM) 
history(重要): 历史对象,包含窗口的浏览历史，可以实现后退
location(重要): 包含浏览器当前的地址信息，可以用来刷新本页面或跳转到新页面
frames: 框架对象，可以获取页面框架内容
screen: 包含有关客户端显示屏幕的信息
navigator: 导航对象, 包含所有有关访问者浏览器的信息


### 部分方法 ###

alert(text): 弹出提示框(警告框)
confirm(): 创建一个需要用户确认的对话框
prompt(text,defaultInput) :创建一个对话框要求用户输入信息
open(url,name,[options]) : 打开一个新窗口并返回新 window 对象
setInterval(): 设置定时器
clearInterval() : 移除定时器
setTimeOut() : 设置延时器
clearTimeOut(): 移出延时器

close(): 关闭窗口
print(): 调出打印对话框



### location对象 ###

location是BOM对象之一，它提供了与当前窗口中加载的文档有关的信息, 还提供了一些导航功能。
事实上，location对象是window对象的属性，也是document对象的属性; 所以window.location和document.location等效。

location 对象的属性

![](location.png)




Location对象的方法

![](location2.png)





## 案例 ##

### 图片切换 ###
轮播图片切换

1. 定时更新
2. 鼠标移动到图后，停止滚动


### 延迟关闭显示 ###

单击 显示 按钮立即显示
单击 隐藏 按钮后，隔5秒后消失


功能：

移动到 显示 按钮，显示 内容块
移出 显示 按钮， 隔5秒后 隐藏 内容块


移入内容块之后，清空 延迟执行 的定时器
移除内容块之后，隐藏内容块
```
	<style>
#box{display:none;margin:10px 0;padding:10px;border:1px solid #ddd;font-size:30px;}
	</style>


<button id="btn1">显示</button>
<button id="btn2">隐藏</button>
<div id="box">#box</div>
```


### 小广告 ###

```
// 创建小窗口
var myWindow = window.open("", "", "width=200px; height=200px");
// 向小窗口中写入内容
myWindow.document.write("LoL !!!");


// 将窗口移动到 (x, y) 坐标
myWindow.moveTo(_x, _y);
// 在窗口大小基础上，x坐标增加 _x, y坐标增加 _y
myWindow.moveBy(_x, _y);

// 将窗口大小修改成 width = x, height = y;
myWindow.resizeTo(_x, _y);
// 在窗口大小基础上，宽度增加 _x, 高度 增加_y
myWindow.resizeBy(_x, _y);
```



### 回到顶部 ###

```
// 当滚动时，会执行此函数
window.onscroll = function () {
}

// IE 中获取滚动条距离顶部的距离
document.documentElement.scrollTop;


// chrome, firefox 中获取滚动条距离顶部的距离
document.body.scrollTop

```

解决兼容的办法

``` 
document.documentElement.scrollTop || document.body.scrollTop || 0;
```




```
#top{display:none;position:fixed;right:0;bottom:0;padding:10px;background-color:#f00;color:#fff;}

<input type="text" id="pos">
<button id="toTop">返回指定滚动条位置</button>
```








# 大纲 #

1. DOM简介
2. 节点关系
3. 节点的属性


# 课堂内容 #

## DOM（文档对象模型） ##

Document Object Model 文档对象模型

DOM就是Document  Object Model，DOM 是 W3C（万维网联盟）的标准。
W3C文档对象模型（DOM）是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。

HTML-页面结构   css-页面样式    javascript –页面行为操作.


DOM， 每一个标签 -> 对象

三个名称都是指同一个内容，只是说法不一样而已

```
标签 <span> <div>     (css 中)
元素 <div id="div1">  (js 中)
节点 <div> <span>     (DOM 中)
```


DOM 中的三个字母:
D（文档Document）可以理解为整个Web加载的网页文档；
O（对象Object）可以理解为类似window对象之类的东西，可以调用属性和方法，这里我们说的是 document 对象；
M（模型Model）可以理解为网页文档的树型结构。

通过 DOM，可以访问所有的 HTML 元素，连同它们所包含的文本和属性。可以对其中的内容进行修改和删除，同时也可以创建新的元素


![](jd.png)

### 节点种类 ###
元素节点  nodeType ==1 
属性节点  nodeType ==2 
文本节点  nodeType ==3





### 获取节点 ###

1. id
    getElementById

2. 获取相同名称的节点列表 name
    getElementsByName
	某些低版本浏览器会有兼容性问题

3. 获取相同class属性的节点列表 class 
    getElementsByClassName
	IE8以下不能用

```

// 解决 IE 下不同获取同一 className 的办法

// 思路
// 1. 首先获取网页上所有的节点
// 2. 筛选节点中 class == className 的节点
// 3. 用数组存储满足条件的节点，并返回
function m1(a) {

	var allNode = document.getElementsByTagName("*");

	var arr = [];

	for (var i = 0; i < allNode.length; i++) {
		// 每一个节点有个内部的属性 className
		// 代表当前节点的 class 的值

		// node.onclick
		// node.style
		// node.class // ==> 因为 class 是个关键字，
		// 获取节点的 class 的值， className

		if (allNode[i].className == a) {
			arr.push(allNode[i]);
		}
	}

	return arr;

}

```

4. tagname
    getElementsByTagName
	

```
    <h1>DOM结构</h1>
    <ul id="list">
        <li><a href="http://www.baidu.com" class="baidu" id="baidu">百度</a></li>
    </ul>
    <table id="dataList">
        <tbody>
            <tr>
                <td>Data11</td>
                <td>Data12</td>
            </tr>
            <tr>
                <td>Data21</td>
                <td>Data22</td>
            </tr>
        </tbody>
    </table>

    <form>
        <input type="text" name="username" id="username">
        <input type="text" name="password" id="password">
    </form>

```


## 案例 ##

### 单击输出按钮的内容 ###

```
// 为什么没有写在文档加载之后，为什么 allBtn 不为空
// 因为 getElementsByTagName 方法在得不到元素的情况下，
// 依然会返回一个对象, 只不过这个对象其中的元素个数为 0
// alert(allBtn);
```


```
// 下标为 i 的对象： 内置了很多属性 和 很多方法。但我们可以往这个对象中新增属性，例如
// 在下标为 i 的按钮对象 中新增了一个属性 xxx，并将其中的值设置为 i
allBtn[i].xxx = i;
```



通过绑定函数的的方法，来获取点击按钮的下标
```
function bind(obj, pos) {
	obj.onclick = function() {
		alert(pos);
	}
}

bind(allBtn[i], i);
```





```
	<button>按钮1</button>
	<button>按钮2</button>
	<button>按钮3</button>
	<button>按钮4</button>
	<button>按钮5</button>
	<button>按钮6</button>
```

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


### 隔行变色 ###

![](ghbs.png)

```
<style>
.red{background:red;}
</style>


<ul id="ul01">
	<li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>F</li>
</ul>

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


# 经典问题 #

1. 将今天课堂代码写一遍
2. 广告窗口自动关闭, 倒计时5秒后关闭窗口 (分别使用定时器和延时器)
![](close.png)

3. 顶部悬浮,当滚动条滚动到较下方时, 留言信息一直显示在顶部
![](top1.png)
![](top2.png)


4. 获取浏览地址后的参数并转换成对象格式
	?name=green&age=18&school=千锋&class=h5开发&lesson=javascript



3. 全选和反选checked


![](checked1.png)
![](checked2.png)


```
	<table id="dataList">
		<thead>
			<th><input type="checkbox" name="all" id="all"></th>
			<th>爱好</th>
		</thead>
		<tbody>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>篮球</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>足球</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>羽毛球</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>爬山</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>游泳</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>购物</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>看电影</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>旅游</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>音乐</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>画画</td>
			</tr>
		</tbody>
	</table>
```





# BOM归类 #


BOM:

核心的对象 window


弹出输入框 ： var res = window.prompt("好汉留下你的大名")
确认框： var res = window.confirm("确定?")

定时重复执行： var res = window.setInterval(函数, 时间); 
清除重复执行   window.clearInterval(res);

延时执行： var res = setTimeout(函数, 时间)
清除延时： clearTimeout(res)


打开窗口： var res = window.open(地址, 名称，选项)
让窗口移动：  res.moveTo(x, y);           moveBy
让窗口变大变小：  res.resizeTo(x, y);      resizeBy


// 非IE 滚动条距离顶部的距离
document.body.scrollTop

// IE 滚动条距离顶部的距离
document.documentElement.scrollTop;


// 兼容写法
var t = document.body.scrollTop || document.documentElement.scrollTop;


滚动时触发函数
window.onscroll = function() {}

页面加载完成执行函数
window.onload = function() {}


浏览器的版本
window.navigator.appName
window.navigator.userAgent

获取当前完整地址： location.href
获取地址中查询字符串： location.seach

刷新： location.reload()
     location.reload(true)

前进： history.forward();
后退： history.back();
记录条数： history.length


-------------
DOM


通过id获取节点对象：  var obj = document.getElementById("id");
通过标签名获取所有节点对象：  var all = document.getElementsByTagName("div");
通过name来获取所有节点对象： var all = document.getElementByName("username");


this








