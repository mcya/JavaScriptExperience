
<%@page import="com.open.eac.core.app.AppHandle"%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="ui" uri="http://www.open.com/eac/core/tag"%>
<%@ include file="/pages/common/common.jsp" %>

<%@page import="com.pytech.timesgp.web.helper.CommonUtil"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.List"%>

<c:set var="path" value="<%=request.getContextPath()%>"></c:set>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10,EmulateIE9" />
<title>在线预览</title>
<ui:Include tags="sigmagrid,artDialog"></ui:Include>
<link href="${path }/pages/css/custom.css" rel="stylesheet">
<style type="text/css">
	.imgdiv{
		
		width: 100%;
		text-align: center;
		/*height: */
	}
	#imgss {
		border: 1px solid #ccc;
	}

</style>
<script type="text/javascript">
	var yulanUrl = localStorage.getItem("yulanUrl")
    console.log(yulanUrl)
	$(function(){
		$("#imgss").attr('src', "../params/projAndDetailImg.jsp?photoUrl="+yulanUrl)
	});

</script>
<script type="text/javascript">
function closeDialog(){
	parent.art.dialog.get("zaixianyulan").close();
}
</script>
</head>
<body style="overflow: auto;">
	<!-- <img id="imgss" alt="" src="../params/projAndDetailImg.jsp"> -->
	<div class="imgdiv">
		<img id="imgss" alt="" src="../params/projAndDetailImg.jsp" title="在线预览">
	</div>
	<div style="width: 100%;text-align: center">
		<br>
		<ui:Button btnType="cancel" onClick="closeDialog();">返回</ui:Button>
	</div>
</body>
</html>