	
	//判断闰年
	function leapYear(a)
	{
		if(a%400==0 || (a%4==0 && a%100!=0))
		{
			return true;
		}
		else
			return false;
	}

	//日期
	var aa="";
	function myDate(aa)
	{
		var b = aa.slice(0,4);
		var c = aa.slice(4,6);
		var d = aa.slice(6,8);
		aa = b+"-"+c+"-"+d;
		return aa;
	}