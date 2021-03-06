
# 大纲 #
1. 数字
2. 关系与逻辑运算
3. 判断

# 内容 #

## 数字 ##


计算机是如何存储数字的？


十进制： 0， 1, 2， ...9 这十个数字来表示我们所有自然数，人类非常熟悉的！
二进制： 0， 1  这两个数字来表示我们所有自然数。

计算机熟悉的进制是：二进制 数，


0（2）   ===> 0（10）
1（2）   ===> 1(10)

二进制中

1 + 1 = 10
10 + 1 = 11    ==》 3(10)
11 + 1 = 100   























十进制、八进制、十六进制


十进制： 0， 1, 2， ...9 这十个数字来表示我们所有自然数
二进制： 0，1 来表示所有的自然数

1(2) == 1(10)
10(2) == 2(10)
11(2) == 3(10)
100(2) == 4(10);

---------

67(10) === 0100 0011(2)
68(10) === 0100 0100(2)




98(10) === ？ 二进制数是多少？

110 0010

98
49 -- 0
24 -- 1
12 -- 0
6  -- 0
3  -- 0
1  -- 1             求余： 3 % 2 ===>  1
0  -- 1                  3 - 2*1 == 必须在 [0,1] 之间
    				  余数为 1
						  
						  


倒除法：
    67 除2 求余
    33 --- 1
	16 --- 1
	8  --- 0
	4  --- 0
	2  --- 0
	1  --- 0
	0  --- 1 
	0  --- 0  从下面往上，将余数拼在一起
	
	



















    33 --- 1
	16 ----1
	8  ----0
	4  ----0
	2  ----0
	1  ----0
	0  ----1

【练习】求 98 所对应的2进制数

    98（10） = 1100010（2）

	倍率 余数
	49 - 0
	24 - 1
	12 - 0
	6  - 0
	3  - 0
	1  - 1
	0  - 1 (倍率为0的时候，就不需要再计算)
	0  - 0
	0  - 0
	0  - 0
	

---------

如何把2进制数转换成10进制数？ （累乘法）

1100010（2）


```
= 0*2^0 + 1*2^1 + 0*2^2 + 0*2^3 + 0*2^4 + 1*2^5 + 1*2^6
= 0*1 + 2 + 0 + 0 + 0 + 32 + 64
= 0 + 2 + 32 + 64
= 98 这个就是十进制数
```



101010001(2) 求出对应的十进制数字


```
101010001（2）

= 1*2^0 + 0 + 0 + 0 + 1*2^4 + 0 + 1*2^6 + 0 + 1*2^8
= 1 + 16 + 64 + 256
= 337
```

















1100010（2）

注: 在这里 ^ 是代表多少次方的意思。

```
1100010（2）
= 0*2^0 + 1*2^1 + 0 *2^2 + 0 *2^3 + 0 *2^4 +  1*2^5 + 1*2^6
= 0 + 2 + 0 + 0 + 0 + 32 + 64
= 98(10)
```

求 11110011(2) 对应的十进制数？


```
= 1*2^0 + 1*2^1 + 0 *2^2 + 0 *2^3 + 1 *2^4 +  1*2^5 + 1*2^6 + 1*2^7
= 1 + 2 + 0 + 0 + 16 + 32 + 64 + 128
= 243
```


计算机中一些术语：

1位 == 1bit== 一个二进制数
1字节 == 1Byte == 8位 （8位一字节）
1千字节 === 1KB	==  1024字节
1MB = 1024KB
1GB = 1024MB
1TB = 1024GB


```

4G 内存 ==> 有多少个位？

4 * 1024 * 1024 * 1024 * 8

约等于 = 32 * 1000 * 1000 * 1000 = 320 0000 0000
```

```
#FF0000  === （红， 绿，蓝） 
=== 11111111 00000000 00000000
红色需要几个字节存储？  3个字节

```

---------
16进制：

特点： 逢16进1
用 0, 1, 2 ..9, a, b, ... f 这16个字母来表示所有的自然数
                10 11     15
				

  16进制数       10进制
     1            1
	 9            9
	 a            10
	 
	 
16进制中
1 + 1 = 2
9 + 1 = a
d + 1 = e
f + 1 = 10
10 + f = 1f
9f + 1 = a0
ff + 1 = 100




19 + 1 = 1a
1f + 1 = 20


	 

     十六进制 二进制  十进制
	  0     0000     0
	  1     0001     1
	  2     0010     2
	  3     0011     3
	  4     0100     4
	  5     0101     5
	  6     0110     6
	  7     0111     7
	  8     1000     8
	  9     1001     9
	  a     1010     10
	  b     1011     11
	  c     1100     12
	  d     1101     13
	  e     1110     14
	  f     1111     15
	  

如何16进制数转换成2进制数？
将每个位转换成 4位的2进制数(0不能省略)，拼在一起即可


FF0000(16)= 1111 1111 0000 0000 0000 0000 
FF0000(16)= 111111110000000000000000(2)

1a(16) == 00011010(2)
378(16) == 001101111000(2)

2进制数，怎么转换成16进制数呢？

001101111000(2) ==  0011 0111 1000 ==> 378(16)



【练习】 1000111010001010 (2) 转换成16进制数

1000 1110 1000 1010 = 8E8A(16) 







【练习】请将 78a521 (16) 转换成 2进制数

78a521（16） = 0111 1000 1010 0101 0010 0001（2） = 累乘法（10）
     

---------
二进制数如何转换成 16进制数？

从低位开始，4位4位一组，如果最高位不够4位，补0
依次将组转换成16进制数即可。

0111 1000 1010 0101 0010 0001（2） = 78a521(16)




8进制
逢8进1
即使用 0, 1, 2, ... 7 这8个数字来表示所有的自然数

8进制中
1 + 1 = 2
7 + 1 = 10
17 + 1 = 20
20 + 1 = 21
27 + 1 = 30
77 + 0 = 77
77 + 1 = 100



8进制转换2进制

     8进制 2进制
	  0     000
	  1     001
	  2     010
	  3     011
	  4     100
	  5     101
	  6     110
	  7     111
	  

1个8进制数 对应 3位二进制数，0不能省略
655(8) = 110 101 101(2)
34（8） = 011 100（2）
361（8） = 011 110 001（2）


11110001（2） = 011 110 001 = 361（8）




```

文件权限：
w : 可写的         
r : 可读的
x : 可执行的

1.html   rwx ==> 111  ==>  7

超级管理员   当前用户所在组     其他用户
    rwx       rwx            ---
	7          7              0

770

```







如何把2进制数转换成8进制数？

将2进制数从低位开始 3位3位一组，分别转换成对应的8进制数即可
110101101（2） = 110 101 101（2） = 655（8）





## 【扩展】 位运算 ##

1bit 二进制数中的一个数就是1位



// & 与 是一个运算符

// a & b 是一个表达式
// 功能： 将每一个bit 一一对应进行与的操作
// 值： 运算之后的值

// 1 & 1  ===> 1
// 1 & 0  ===> 0
// 0 & 1  ===> 0
// 0 & 0  ===> 0

---------
//	| 或 是一个运算符
// 功能： 将两个数的位一一进行或运算
// 值： 就是运算后的结果
// 1 | 1 ==> 1
// 1 | 0 ==> 1
// 0 | 1 ==> 1
// 0 | 0 ==> 0

---------
//	^ 异或 是一个运算符
// 功能： 两个数的bit，一一进行 异或 操作
//        异或：不同的话，就是1，否则就是0

// 1 ^ 1 ==> 0
// 1 ^ 0 ==> 1
// 0 ^ 1 ==> 1
// 0 ^ 0 ==> 0



---------
NaN

当不能运算的时候的结果是 NaN
// NaN: Not a Number

NaN 的类型是 Number，是一个特殊的 Number

---------

Number
格式： Number(内容)

会尝试将内容转换成 Number 的数据，
如果不能转换，结果为 NaN



Object 对象(简单了解)

var salary = 15000;
var name = "上司";


var stu1Name = "zhangsan";
var stu1Age = 18;


var stu = {name: "zhangsan", age: 18};


## 关系运算 ##

1. `>, <, >=, <=, !=, ==, !==, ===`

6 > 5
功能： 比较两个数
值： 比较的结果，如果为真 true，否则 false


>= 大于等于
<= 小于等于

== 判断两边是否相等
!= 不等于

（
a = 5 
功能： 把右边的赋值到左边的
值：赋值之后，左边的值 
）


【注意】 == 不管数据类型是否相同，只要值相同即为真
document.write("33" == 33);


=== 完全等于，绝对等于， 恒等于
判断 类型 与 值，必须两者同时相同，才为真
否则为假


!==
判断 类型 与 值，必须两者不同时相同，才为真
否则为假


【注意】 NaN 不能直接进行相等判断
如果要判断一个变量是否是 NaN
可以通过 isNaN(a) 
如果 a 为 NaN， 那么结果就为 true， 否则就为false；

2. 【案例】判断 a 是否在 (3, 10) 之间

永远都为真 ： 3 < a < 10 

解决办法：

a > 3 && a < 10
(a > 3) && (a < 10)


## 逻辑运算 ##
&&, ||, !

---------
&& 逻辑运算与操作

判断两边表达式的值, 
只有两边同时为真，结果才为真
否则，为假

true && true  ==> true
true && false ==> false
false && true ==> false
false && false ==> false


【注意】 && 左边表达式值为false
      右边的表达式不会执行

---------
|| 逻辑运算中的或运算
只有两边同时为假，结果才为假
否则，为真

true || true  ==> true
true || false ==> true
false || true ==> true
false || false ==> false


【注意】 || 左边表达式值为true
      右边的表达式不会执行

---------
! 逻辑运算中非运算，代表“颠倒黑白”

!true 等于 false
!false 等于 true




## 选择判断 ##

1. if 判断语句，大括号



【练习】
编写程序, 输出两个数的较大数

写两个输入框，输入这两个数，
通过点击按钮，输出较大的那个数


语法：

if (表达式) {
    代码1
} else {
    代码2
}

如果 表达式的值为真，
那么执行 代码1，否则，执行代码2



   elseif
  【案例】计算某一年是否是闰年(与或非的运用)

  【案例】成绩的判定


【练习】

(见： demo12-分段函数.html)
编写程序, 模拟下面分段函数.  (用 if-elseif 来写 )

          x * x     (x <0)
    y =   2x + 1 (1 <= x < 5)
          4x -1     (x >= 5)
输入x，输出y

x 可以直接定义变量赋值即可。








2. switch 语句
  【案例】判断星期几
  break 跳过的问题

	


# 经典问题 #
1. 判断一个整数，属于哪个范围：大于0；小于0；等于0

2. 判断一个整数是偶数还是奇数，并输出判断结果

3. 开发一款软件，根据公式（身高-108）*2=体重
，可以有10斤左右的浮动。
来观察测试者体重是否合适


要求输入 身高 和 体重

1024哥哥： 168,   116
 预期的身高： (168 - 108)*2 == 120



4. 计算某一年是否是闰年(与或非的运用)
闰年： 能被400整除 或者 能被4整除不能被100整除



