

// 创建一个工具
// 根据传入的 日期对象 ，返回 一个格式化好对应的日期字符串
// 参数： 日期对象
// 返回值： 格式化好对应的日期字符串
function getDateString(oDate)
{

	var year = oDate.getFullYear();
	var month = oDate.getMonth() + 1;
	var day = oDate.getDate();


	// 获取日期对象的 时、分、秒
	var h = oDate.getHours();
	var m = oDate.getMinutes();
	var s = oDate.getSeconds();


	// 星期
	var week = oDate.getDay();


	var str = "";
	
	str += year + "年" + month + "月" + day + "日 ";

	var arr = ["日", "一",  "二",  "三",  "四",  "五",  "六"];

	str += "星期" + arr[week] + " ";
	


	
	/*

	// 星期二
	switch (week)
	{
	case 1:
		str += "星期一 ";
		break;
	case 2:
		str += "星期二 ";
		break;
	case 3:
		str += "星期三 ";
		break;
	case 4:
		str += "星期四 ";
		break;
	case 5:
		str += "星期五 ";
		break;
	case 6:
		str += "星期六 ";
		break;
	case 0:
		str += "星期日 ";
		break;
	
	}
	//*/





	if (h < 10)
	{
		str += "0";
	}
	str += h;
	str += ":";


	if (m < 10)
	{
		str += "0";
	}
	str += m;
	str += ":";


	if (s < 10)
	{
		str += "0";
	}
	str += s;
	str += "";




	// 获取日期对象的毫秒数
	var ms = oDate.getMilliseconds();
	str += ".";
	str += ms;






	// 函数的返回值，是return 后面表达式的值
	// 返回我时间字符串结果
	return str;
}













// 函数 myDateString
// 功能： 返回一个以我格式创建的字符串
function myDateString()
{
	// 创建一个当前时间的对象
	var oDate = new Date();


	return getDateString(oDate);
}
