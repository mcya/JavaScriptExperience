


# 讲师 #

杨杰
QQ: 616651001(绿叶)


# 大纲 #
1. JS是什么
2. 变量
3. 基本运算

# 课程内容 #

## JS是什么 ##

### 为什么要学? ###

1. 动态效果的基石
2. 游戏
3. 地图
4. Web聊天
5. ...

### 历史 ###
Netscape (网景公司) 世界上第一个浏览器公司
微软中的 IE


---------
Netscape: LiveScript -> JavaScript
IE:  JScript


---------
1998开始，对于浏览器需要定义一个统一的标准，

ECMA 欧洲计算机组织协会，他出面来制定JavaScript语法标准


现在通常所说的标准是指： 
ECMAScript 5 (2009)  (简称 ES5)

ECMAScript 2015 (2015) (简称 ES6)

ECMAScript 2016 (2016) (简称 ES7)

### 特点 ###

1. 解释型语言
编程语言分类： 
    (1) 编译型 ： 需要编译，例如：C, Java, ...， 运行效率高
    (2) 解释型： 不需要编译, 类似： JavaScript, python, perl, php, 运行效率低

2. 宿主为浏览器
JavaScript 必须在浏览器上运行


### 组成部分 ###

通常所说 JavaScript 包含下面三个部分

1. ECMAScript
    只规定了程序的格式、语法等
2. DOM 【重要，以后课程中会详细讲解】
    体现了JavaScript【面向对象编程思想】
	通过 JS 可以操作（增、删、修、查）网页上的元素 
3. BOM
    浏览器的操作接口

### 如何写 ###
---------

开发工具，Editplus 的安装

1. 破解

2. 修改新建 HTML 文件 文档模板

(1) 打开今天课程文件夹，复制 template.html 文件

![](e2.png)

(2) 按照如下操作，打开 editplus 安装目录

![](e1.png)

(3) ** 将复制好的 template.html 粘贴到此位置，覆盖即可 **

3. 字体大小设置
    工具 / 参数设置
![](1.png)

4. 默认的文件编码设置
    工具 / 参数选择 / 默认编码
![](2.png)

5. 取消文件默认选项
![](3.png)




---------

【示例】 第一个js程序

### 语法 ###

1. 引入方式

    (1) 嵌入式：
    `<head> <script> 这里写js程序程序 </script> </head>`
	
	(2) 引入式：
     `<script src="文件路径"> </script>`
     注意要写在 head 标签中

2. 输出内容
	document.write

3. 注释
    单行注释 `//`
	多行注释 `/* */`

4. script的属性
    type  "text/javascript", 表示脚本语言的类型(可以不写)
    language 原来用于代码使用的脚本语言。由于大多数浏览器忽略它，所以不要用了

## 变量 ##

来做一个简单的计算，那么必须要知道数据是如何存储的


### 标识(zhi)符 ###

由 字母(a-z, A-Z)、数字、下划线、$ 组成的式子，称为标识符。 
必须是以字母、下划线、$ 开头， 不能以数字开头

示例:

abc 是的
a_123 是的
长度 不是
___ 是的
$len 是
2x 不是


1. 组成方式
    字母、数字、下划线、$ 
    不能以数字开头

2. 建议
    (1) 不能重名
	(2) 名字尽可能有意义
	(3) 单词之间首字母尽量大写  datalength -> dataLength

定义变量根据类型建议加上前缀
![](var.png)

关键字 （命名时不能与关键字冲突）
```
Break	Else	New	var
Case	Finally	Return	void
Catch	For	Switch	while
Continue	Function	This	with
Default	If	Throw	
Delete	In	Try	
Do	Instanceof	Typeof	
```

保留字（命名时不能与保留字冲突）
```
Abstract	Enum	Int	short
Boolean	Export	Interface	static
Byte	Extends	Long	super
Char	Final	Native	synchronized
Class	Float	Package	Throws
Const	Goto	Private	Transient
Debugger	Implements	Protected	Volatile
Double	Import	Public	
```

### 什么是变量 ###

【示例】 定义变量

```
// 使用变量，必须在定义变量之后
// a = 50;

// var 代表定义一个数据空间， variable 代表可变的，称定义出来的空间为【变量】
// a 是空间的名字，满足标识符的条件
// = 代表赋值的意思， 把 = 右边的值 赋值给 左边的变量
// 10 称为【常量】 固定的值，不会改变
// 行结尾是 ;就代表语句结束。 建议大家在写的时候都 ; 结尾
// 在数学上的说法是：设 a 值为 10
// 称为 变量的初始化
var a = 10;
```

### 变量的类型 ###

为了更好的管理计算机的内存，所以有了变量类型的概念。


### 类型转换 ###

分类： number, string, boolean


获取变量类型的方式
```
typeof a
```

(1) 字符串转数字
parseInt("123")

(2) 数字转字符串
var a = 10;


## 基本运算 ##

【案例演示】 简易计算器


### 表达式 ###

用 运算符(+, -...) 将变量 和 常量连接起来的式子，称为表达式。


例如：
5 + 5


### 算数运算 ###

算数运算符： +, -, *, /, %



【练习】 做一个计算两数相乘的计算器

1. input 中 id 用于取出 input 中的值
2. onclick 中的名字要 (), 并且与 js 中的名字保持一致
3. document.write 是会清空body元素中原有内容的
4. 如果发现bug，不要慌张， 【优雅地】加上一些 输出 语句， 缩小范围，直到找到 bug，并解决
5. 写出来后，记得测试3遍

两个运算符，++(自增运算符)，-- （自减运算符）
见（demo7-自增自减.html）

【练习】

已知 var a = 9;     (赋值运算符,  自增, 自减运算符)
    var b = a++;
    var c = --b;

输出 a? b? c?

见(demo8-自增自减练习.html)



# 作业 #
1. 今天课堂所有的例子代码，照敲两遍

2. 为抵抗洪水，战士连续作战89小时，编程计算共多少天零多少小时？

3. 小明要到美国旅游，可是那里的温度是以华氏度为单位记录的。它需要一个程序将华氏温度（80度）转换为摄氏度，并以华氏度和摄氏度为单位分别显示该温度。
 ：摄氏度与华氏度的转换公式为：摄氏度 = 5/9.0*(华氏度-32)
 保留3位小数

4. k=-2;
document.write(++k + k++ + ++k + k);

5. 【选做，要用到后天的内容】入职薪水10K，每年涨幅5%，50年后工资多少？(预习for)



