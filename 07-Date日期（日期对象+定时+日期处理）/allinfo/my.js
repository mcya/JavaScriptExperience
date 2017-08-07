
// 将日期对象 转换成 我们自己定义时间字符串
function createMyTime(d) {

	var str = "";

	// getFullYear 获取完整的年份
	str += d.getFullYear();
	str += "年";


	str += (d.getMonth() + 1);
	str += "月";

	// getDate 是用于获取第几天
	str += d.getDate();
	str += "日";
	str += " ";


    // 拼接时间字符串
	str += d.getHours();
	str += ":";
	
	str += d.getMinutes();
	str += ":";

	// 获取秒
	str += d.getSeconds();
	str += ".";

	// 获取毫秒
	str += d.getMilliseconds();

	return str;
}
