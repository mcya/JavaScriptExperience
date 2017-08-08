/*
封装日期处理的函数库(重要！)


判断某年份是否为闰年, 传入年份，返回值：为闰年返回 true, 否则返回 false
将日期对象格式化输出 “2015-08-24”
获得某个月份的天数，传入月份，返回对应月份的天数
判断两个日期相差的天数，传入两个日期对象，返回两者之间相差的天数
获得N天以后的日期，返回 N 天后的 日期对象

将字符串转换为日期（选做）

*/


// 判断某年份是否为闰年, 传入年份，返回值：为闰年返回 true, 否则返回 false

// 定义了函数 isLeap
function isLeap(year)
{
	if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
	{
		return true;
	}

	return false;
}


// 将 日期对象 格式化输出 “2015-08-24”
// 参数： 日期对象
// 返回值： 是一个字符串
function format( oDate )
{
	var y = oDate.getFullYear();
	var m = oDate.getMonth() + 1;
	var d = oDate.getDate();

	var str = y + "-";
	if (m < 10)
	{
		// 个位数，那么，在字符串前面补个0
		str += "0";
	}
	str += m;
	str += "-";

	if (d < 10)
	{
		str += "0";
	}
	str += d;

	return str;
}






// 判断两个日期相差的天数，传入两个日期对象，返回两者之间相差的天数




// 获得某个月份的天数，传入月份，返回对应月份的天数

// 函数名：monthDay
// 参数： 月份, 年份
// 返回值： 天数

function monthDay(month, year)
{
	var day = 31;

	switch (month)
	{
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
		day = 31;
		break;
	
	case 4:
	case 6:
	case 9:
	case 11:
		day = 30;
		break;

    case 2:
		if (isLeap(year))
		{
			day = 29;
		}	
		else
		{	
			day = 28;
		}
		break;

	default:
		// 出错了
		day = 0;
	}


	return day;
}


// 函数名：deta 
// 参数： 日期对象1， 日期对象2
// 返回值： 相差的天数

function deta(oDate1, oDate2)
{
	// 思路：
	//  (1)两个日期的毫秒值差
	//  (2)转换成天数

	var d = oDate2.getTime() - oDate1.getTime();

	// 取 d 的绝对值
	d = Math.abs(d);
	
	var days = d / 1000 / 60 / 60 / 24;

	return days;
}


// 获得N天以后的日期，返回 N 天后的 日期对象

// 函数名： afterNDay
// 参数： n
// 返回值： N 天后的 日期对象

// N 大写字母一般用于表示 不会改变的数字
function afterNDay(n)
{
	// 思路：
	// (1) 创建一个当前日期的对象
	// (2) 将对象的天设置为 N 天以后
	// (3) 返回 对象

	var oDate = new Date();

	oDate.setDate(  oDate.getDate()  +  n  );

	return oDate;
}

// 函数库 只是定义函数，不会调用函数
// document.write(         afterNDay(-1)  );



// 将字符串转换为日期（选做）


// 函数名： transform      转换的意思
// 参数： 字符串           2016-8-10 10:10:10
//                         2016/8/10 10:10:10 （再写一个函数即可）
// 返回值： 日期对象

function transform(str)
{
	// 思路：
	//  (1) 找出 年月日、时分秒  字符串分割
	//        首先 用 空格 分割： 2016-8-10，  10:10:10
	//         将第1个字符串按照 - 分割： 2016,8,10
	//         将第2个字符串按照 : 分割： 10,10,10
	
	//  (2) 创建一个日期对象
	//  (3) 将  年月日、时分秒 设置到日期对象中


	var arr1 = str.split(" ");

	// 日期的数组
	var arrDate = arr1[0].split("-");

	var year = arrDate[0];
	var month = arrDate[1];
	var day = arrDate[2];


	// 时间的数组
	var arrTime = arr1[1].split(":");


	var hour = arrTime[0];
	var min = arrTime[1];
	var sec = arrTime[2];


	// 创建一个日期对象
	var oDate = new Date();


	// (3) 将  年月日、时分秒 设置到日期对象中
	oDate.setFullYear(year);
	oDate.setMonth(month-1);
	oDate.setDate(day);
	oDate.setHours(hour);
	oDate.setMinutes(min);
	oDate.setSeconds(sec);

	return oDate;
}



// document.write( new Date() );

//document.write(    transform("2110-1-1 0:10:10")  );
//document.write(    transform("2016-8-10 10:10:10")  );
//document.write(    transform("1970-1-1 0:10:10")  );



//var oDate = transform("2110-1-1 0:10:10");


// document.write(    format( oDate )   );
// document.write(    format( new Date() )   );

// 将日期对象格式化成  2016-8-10 10:10:10 形式
// 函数名：formatTime
// 参数： 日期对象
// 返回值： 格式化后的字符串

function formatTime(oDate)
{
	var str = "";

	// 调用之前格式化年月日的函数
	// str = format(oDate);

	// 拼接 年月日
	str += oDate.getFullYear();
	str += "-";
	str += oDate.getMonth() + 1;
	str += "-";
	str += oDate.getDate();

	// 拼接 时分秒
	str += " ";
	str += oDate.getHours();
	str += ":";
	str += oDate.getMinutes();
	str += ":";
	str += oDate.getSeconds();
	
	return str;
}


//var str = formatTime( new Date() );

// document.write(str);

// var oDate = transform("2110-1-1 0:10:10");

//var str = formatTime( oDate );

// document.write(str);