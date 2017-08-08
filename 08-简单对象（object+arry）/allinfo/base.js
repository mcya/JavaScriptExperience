
//判断年份是否为闰年，如果是闰年返回真，不是闰年返回假
function LeapYear(year){
	if( year%4==0 && year%100!=0 || year%400==0 ){
		return true;		
	}else{
		return false;
	}
}





//将日期格式化输出 “2015-08-24”
function formatDate(d){
	//console.log(d);	// Date {Thu Jun 30 2016 09:33:23 GMT+0800}
	var y = d.getFullYear();
	var m = d.getMonth()+1;
	var dd = d.getDate();
	var h = d.getHours();
	var mm = d.getMinutes();
	var s = d.getSeconds();	

	if (m < 10) {
		m="0"+m;
	}
	if(dd<10)dd="0"+dd;
	if(h<10)h="0"+h;
	if(mm<10)mm="0"+mm;
	if(s<10)s="0"+s;
	return y+"-"+m+"-"+dd+" "+h+":"+mm+":"+s;
}

//获得某个月份的天数
function getMD(year, month){
	switch(month){
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			return 31;
		case 2:
			if( LeapYear(year) ){
				return 29;
			}else{
				return 28;
			} 
		default:
			return 30;
	}
}

//将字符串转换为日期
// 2016-07-20
// 2016-01-20  ==> 0
function StrToDate(str){
	var arr = str.split("-");

	var obj = new Date();

	obj.setFullYear(arr[0]);
	obj.setMonth(arr[1] - 1);
	obj.setDate(arr[2]);

	return obj;

	// 根据年月日创建日期
	// return new Date(arr[0], arr[1], arr[2]);
}

//判断两个日期相差的天数
function diffDate(d1, d2){
	var hs = (d1.getTime() - d2.getTime());

	return hs/1000/60/60/24;
}

//获得N天以后的日期
function NDate(date, n){	
	//date.setTime( date.setDate(date.getDate()+n) );
	// 1~31 ==> 100
	date.setDate(date.getDate()+n);
	return date;
}

//秒转换为时间
function S2T(n){
	var h = parseInt(n/3600);
	var m = parseInt(n%3600/60);	//n=3600   60
	var s = n%60;
	return h+"时"+m+"分"+s+"秒";
}
