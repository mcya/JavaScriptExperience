

# 大纲 #

1. String 对象
2. Math 对象


# 内容 #

## String 对象 ##

【案例】过滤敏感词


### 知识点 ###

1. 字符串对象定义
2. 取出字符串中的字符

ASCII码 规定 0~127 之间的字符 
（数字、英文字母、键盘）

(只占1字节)


中文字符
字符表： 
gb2312 规定 6000多个常用字符的编码

1111 1111(2) ==> 255(10)
1111 1111 1111 1111(2) ==> 65535(10) 

** 中文字符 占2个字节 **


GBK 标准： 增加少数民族的文字字符
中文字符 占2个字节

GB2312, GBK 统称为 多字节编码



---------
想把全世界所有的符号 都存下来，2个字节（65535）即可都存下来，
所以，标准组织规定，所有字符都用 2个字节进行编码 
统称为 Unicode 编码

Unicode-4 编码，用4个字节来字符，数量很庞大了，可以存下整个银河系的字符。用于以后扩展用


---------
为了节约存储空间和网络流量，推出 UTF-8 编码

即通过一种算法计算字符的编码，可以存所有的中文、英文、世界上的符号，这种算法算出来的空间比 Unicode 编码少

---------

3. ASCII码 与 字符编码
4. 字符串查找

```
var s1 = "1ab23***abc123";

// 查找 s1 中是否包含 ab

// 返回：从前往后 找，第一个找到的下标
// var r = s1.indexOf("ab");

// 返回：从后往前 找，第一个找到的下标
var r = s1.lastIndexOf("ab");

// 如果找不到，返回 -1，否则返回相应的下标

alert(r);

```

5. 字符串替换 (了解正则表达式)

```

var s1 = "abc";

// 把 b 替换成 #
var s2 = s1.replace("b", "#");


// 【注意】 replace 函数并不会将 s1 替换掉，s1 依然还是原来的内容
alert(s1);

// 输出替换后的结果
alert(s2);
```

6. 字符串分割
(demo7-字符串分割.html)

7. 字符串截取
(demo7-字符串分割.html)

### 案例实战 ###

---------
【案例】 加密解密

```
// 获取对应字符的 ASCII 编码
var code = str.charCodeAt(i);

// ASCII 码 转换成 字符
var c = String.fromCharCode(code);


// ------------------

var arr1 = [1, 2, 3];

// map 数组的方法
// 遍历数组中的所有元素
// 可以通过修改返回值，将数组中的元素重新改个形式
var arr2 = arr1.map(function (a) {
    return "<span>" + a;
});

// ------------------

// 按照 "" 联结数组中所有的元素
// 返回拼接之后的字符串
var result = arr2.join("");

```


【加密后的优化】
通过数学运算进行加密


---------
string 与 new String 的区别

```
var str = "abc";

// 这里 str 是一个字符串类型的变量
// 那么： 
// 为什么字符串类型的变量，可以使用 字符串对象中的方法
// 其实这一个方法，内部还是创建一个字符串的对象
str.charAt(1);

也就是说， str.charAt(1) 等价于
var t = new String(str);
t.charAt(1);
// 最后将 t 释放掉
```

---------
【案例】 用户名验证
1. 长度在6~14位
2. 不能有空格
3. 只允许输入数字、大小写字母、下划线



---------
【案例】 计算商品总价

基本的  html + css 结构, 图片为 s1.jpg

```
<style>
.pshow{padding:15px;overflow:hidde;}
.pshow h1{font-size:18px;}
.pshow img{float:left;margin-right:20px;width:300px;border:1px solid #ddd;}
#subPrice{color:#c00;font-weight:bold;}
#qty{width:60px;}
</style>


<div class="pshow">
	<h1>Nike 耐克官方 NIKE AIR MAX 90 ESSENTIAL 男子运动鞋 537384</h1>
	<img src="s1.jpg">
	<p id="price">价格：599.98元</p>
	<p>数量：<input type="number" id="qty" min="1" max="100"></p>
	<p>总价：<span id="subPrice"></span></p>
</div>
```

(demo8-价格计算.html)

---------
【案例】 过滤敏感词



## Math对象 ##

### 知识点 ###
1. Math.round(3.6) // 4 //四舍五入
2. Math.random() //返回0-1之间的随机数
3. Math.max(num1, num2) //返回较大的数
4. Math.min(num1, num2)  //返回较小的数
5. Math.abs(num)  //绝对值
6. Math.ceil(19.3)  //20  向上取整
7. Math.floor(11.8)  //11  向下取整
8. Math.pow(x,y)  //x的y次方
9. Math.sqrt(num)  //开平方

### 案例实战 ###

---------
【案例】4位随机字母数字 组合的验证码



---------
【练习】写出勾股定理的公式
设三角形的直角为X Y  斜边为Z

输入 x, y,  求 z 值


x^2 + y^2 === z^2

z = sqrt(x^2 + y^2)



## 经典问题 ##

随机验证码，再多考虑 小写字母 的情况



2. 注册页面的简单数据校验，（14K）
    名字只能包含数字、字母和下划线，数字不可以开头，长度不低于6，不高于20
    密码必须一致
    ** 昵称一栏要将敏感词(tmd, fuck 等)过滤，在提交表单时自动替换非法字符，并弹出警告信息 **
    ** 所有输入框不能为空，并数据合法，点击提交才可以正确提交表单数据 **

3. 已知字符串“a,a,b,c,c,d,f,g,j,j”编程实现以下功能。(13K)
    统计每个字符出现的次数，结果显示 a 2、b 1、c 2、d1
    去掉重复的字符，使结果显示 abcd
