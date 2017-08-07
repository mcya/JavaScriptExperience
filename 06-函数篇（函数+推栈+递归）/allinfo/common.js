
function add(a, b)
{
	return (a + b);
}


// echo 回响
function echo(a)
{
	// return 只能写在函数中，作为函数的返回值
	// 也代表函数执行完毕
	return a;

	// 函数中 return 后面的语句都会跳过
	// 所以这里不执行
	document.write("abc");
}


function sum(n)
{
	var s = 0;
	for (var i = 1; i <= n; i++)
	{
		s += i;
	}

	// 函数的输出，就是 return 后面的 表达式的值
	// 也称为函数的返回值
	return s;
}

