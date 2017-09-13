
// 工具： 返回对应所有 class 为一个值的 标签对象
// 名字： getClassName
// 参数： 找哪个className
// 返回值： 数组

function getClassName(className)
{
	var arr = new Array();

	var all = document.getElementsByTagName("*");

	for (var i = 0; i < all.length; i++)
	{
		// all[i].className  节点中 class 的值
		// className 是函数调用时传递过来的参数
		if (all[i].className == className)
		{
			// 将满足条件的对象，压入到数组
			arr.push(all[i]);
		}
	}

	return arr;
}



// 通过节点对象，找出下一个【元素】节点对象
// 工具名： getNextElem
// 参数： 当前节点对象
// 返回值： 下一个【元素】节点对象

function getNextElem(oNode)
{
	// 先找出下一个节点
	oNode = oNode.nextSibling;
	while (oNode.nodeType != 1)
	{
		oNode = oNode.nextSibling;
	}

	return oNode;
}


