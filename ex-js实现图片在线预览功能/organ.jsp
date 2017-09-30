<%@page import="com.open.eac.core.app.AppHandle"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="ui" uri="http://www.open.com/eac/core/tag" %>
<c:set var="path" value="<%=request.getContextPath() %>"></c:set>
<c:set var="user" value="<%=AppHandle.getCurrentUser(request) %>"></c:set>
<%
	pageContext.setAttribute("structure_organ", AppHandle.canAccess(request.getRemoteUser(), "structure_organ"));
	pageContext.setAttribute("structure_user", AppHandle.canAccess(request.getRemoteUser(), "structure_user"));
	pageContext.setAttribute("structure_user_export", AppHandle.canAccess(request.getRemoteUser(), "structure_user_export"));

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>组织架构管理</title>
<style type="text/css">
#baseContainer{position: relative;}
#treePanel {white-space: nowrap;font-size:12px;margin: 0;width: 200px;height: 100%;padding: 0px 0px;float: left;border: 0px solid #c6dcf1;position: relative;overflow: auto;}
#searchContanter{position: absolute;top: 26px;z-index: 10;left: 2px;background-color: #eee}
.sbtn{ background-color:#FFF; border:1px solid #CCC;height:24px; width:40px;cursor: pointer;} 
</style>
<ui:Include tags="sigmagrid,artDialog,zTree,dhtmlxtoolbar"></ui:Include>
<link href="css/custom.css" rel="stylesheet">
<script type="text/javascript">
var path = '${path}';
var rootId = '${user.orgCode}';

var structure_organ = ${structure_organ};
var structure_user = ${structure_user};
var userCode = '${user.userCode}';
var userorgid = '${user.orgId}';
</script>
<script type="text/javascript" src="js/initTree.js"></script>
<script type="text/javascript" src="js/organ.js"></script>
<script type="text/javascript">
	var parameters = {ORG_CODE:rootId};
	$(function(){
		//initToolbar();
		$("#tree").height($(window).height());
		initTree();
		
		var height = $(window).height()-$("#head").height()-6;
		var width = $(window).width()-$("#treePanel").width()-1;
		$("#grid").height(height);
		$("#grid").width(width);
		loadGrid('grid',path+'/com.open.eac.base.query.OrganQuery',columns,parameters,{exportFileName:'组织信息导出表',autoLoad:false,singleSelect:true});
		
		$(window).resize(function(){
			height = $(window).height()-$("#head").height()-6;
			$("#grid").height(height);
			width = $(window).width()-$("#treePanel").width()-1;
			$("#grid").width(width);
		});


		$('#grid').on('click', '#zzXg', function(e){
			openZuzhi()
		})
		$('#grid').on('click', '#zzXgs', function(e){
			openZuzhi()
		})
		$('#grid').on('click', '#zzXz', function(e){
			var value = $(this).attr('names')
			openXiazai(value)
		})


		$('#grid').on('click', '#xmXg', function(e){
			openXiangmu()
		})
		$('#grid').on('click', '#xmXgs', function(e){
			openXiangmu()
		})
		$('#grid').on('click', '#xmXz', function(e){
			var value = $(this).attr('names')
			openXiazai(value)
		})

		$('#grid').on('click', '#sptXg', function(e){
			openShapantu()
		})
		$('#grid').on('click', '#sptXgs', function(e){
			openShapantu()
		})
		$('#grid').on('click', '#sptXz', function(e){
			var value = $(this).attr('names')
			openXiazai(value)
		})


			
	});


	
	function changeScope(obj,val){
		$(obj).siblings(".selected").removeClass("selected");
		$(obj).addClass("selected").addClass("label_active");
		$("#"+$(obj).attr("for")).val(val);
		query(false);
	}
</script>
</head>
<body style="padding: 0;margin: 0px;overflow: hidden;">
<form action="" id="hiddenForm" style="display: none">
	<input id="orgId"/>
	<input id="orgName"/>
	<input id="orgCode"/>
	<input id="busiCode"/>
	<input id="orgFileid"/>
</form>
	<div id="baseContainer" style="overflow: hidden;">
		<div id="treePanel" style="overflow: hidden;">
			<div id="mgrbtn" style="padding-left: 3px;">
			</div>
			
			<div id="searchContanter" style="height: 30px; width: 100%; margin-top: 0px; padding-top: 2px; margin-left: 0px;display: none">
				<span>
					<ui:TextBox id="search_str" style="width:150px"></ui:TextBox>	
				</span>
				<input type="button" value="搜索" onclick="doSearch();" class="sbtn"/>
			</div>
			
			<div id="tree" class="ztree" style="padding: 5px 0px 0px 0px;margin: 0px; width: 200px; overflow: auto; background-color: #fff; border-top: 0px solid #c6dcf1;"></div>
		</div>
		<div id="content" style="float: left;">
			<div id="head"   style="padding-left:10px;padding-bottom:6px">
				<form action="" id="queryForm">
				<table>
				   <tr>
						<td colspan="9">
							<input type="hidden" id="ORG_SCOPE" name="ORG_SCOPE">
						</td> 
					</tr>
				
					<tr>
						<td>组织名称:</td>
						<td>
							<ui:TextBox id="org_name"></ui:TextBox>
						</td>
						<td style="padding-left:10px;">组织编码:</td>
						<td>
							<ui:TextBox id="ORG_CODE"></ui:TextBox>
						</td>
						<td style="padding-left:10px;">
							<ui:Button btnType="query" onClick="query()">查询</ui:Button>
							<ui:Button btnType="reset" onClick="doReset()">重置</ui:Button>
							<ui:Button btnType="edit" onClick="editSpt()">沙盘图设置</ui:Button>
						</td>
					</tr>
					<tr>
						<td></td>
						<td>
						</td>
						<td></td>
						<td></td>
						<td>
							<ui:Button btnType="import" onClick="shangchuanZuzhi()">组织架构图片上传</ui:Button>
						
							<ui:Button btnType="import" onClick="shangchuanXiangmu()">项目介绍图片上传</ui:Button>
						</td>
					</tr>
				</table>
				</form>
				<div id="buttons">
				<!-- 
					 <c:if test="${structure_user == true }">
					 <ui:Button onClick="javascript:addOrgan();" btnType="add">新增</ui:Button>
					 <ui:Button onClick="javascript:editOrgan();" btnType="edit">修改</ui:Button>
					 <ui:Button onClick="javascript:deleteOrgan();" btnType="delete">删除</ui:Button>
					 <%-- <ui:Button onClick="javascript:importOrgan();" btnType="import">导入</ui:Button> --%>
					 </c:if>
			 -->		 
					 <%-- <ui:Button onClick="javascript:viewOrgan();" btnType="view">查看</ui:Button> --%>
					 <c:if test="${structure_user_export == true }">
					 <ui:Button onClick="javascript:exportOrgan();" btnType="excel">导出</ui:Button>
					 </c:if>
				</div>
			</div>
			<div id="box">
				<div id="grid" style="border:0px solid #cccccc;background-color:#f3f3f3;padding:0px 0px 0px 1px;"></div>
			</div>
		</div>
	</div>
</body>
</html>