var state = {'1':'是','0':'否'};
var inuse={'1':'是','0':'否'};
function stateRender(value ,record,columnObj,grid,colNo,rowNo){
	return state[value];
}
function inuseRender(value ,record,columnObj,grid,colNo,rowNo){
	return inuse[value];
}
function LeaderRender(value ,record,columnObj,grid,colNo,rowNo){
	var orgid=record.ORG_ID;
	
	return '<a href="javascript:;" onclick="befLeader(\''+orgid+'\')">[往届信息]</a>';
}
var columns = [{
	id : "PROJID",
	headAlign:'center',
	align : 'center',
	isCheckColumn:true,
	exportable:false
},
	/*{
    id : "ORG_ID",
    header : "沙盘图",
    width :100,
    align : 'center',
    exportable:false,
    renderer:editSpt
},*/
	{
	id : "PROJSHORTNAME",
	header : "项目分期",
	width :200,
	align : 'center',
	toolTip:true
},{
	id : "PROJNAME",
	header : "全称",
	width :300,
	align : 'left',
	toolTip:true
}, {
        id : "PROJIMG",
        header : "组织架构图片",
        width :150,
        headAlign:'center',
        align : 'left',
        type :'string',
        toolTip:true,
        renderer: zuzhi
    }, {
        id : "DETAILIMG",
        header : "项目介绍图片",
        width :150,
        headAlign:'center',
        align : 'left',
        type :'string',
        toolTip:true,
        renderer: xiangmu
    },{
	id : "SPTIMG",
	header : "沙盘图",
	width :150,
	toolTip:true,
	align : 'left',
    renderer: shanpantu
}];
function zuzhi(val, record, columnObj, grid, colNo, rowNo) {
	if (val==null || val=='') {
		return '<button style="margin:5px 15px" id=zzXg>更换</button>'
	}
	var val = String(val)
	return '<button style="margin:5px 15px" id=zzXgs>更换</button><button style="margin:5px 0" names='+'"'+val+'"'+' id=zzXz>查看</button>'
}

function xiangmu(val, record, columnObj, grid, colNo, rowNo) {
	if (val==null || val=='') {
		return '<button style="margin:5px 15px" id=xmXg>更换</button>'
	}
	return '<button style="margin:5px 15px" id=xmXgs>更换</button><button style="margin:5px 0" names='+val+' id=xmXz>查看</button>'
}

function shanpantu(val, record, columnObj, grid, colNo, rowNo) {
	if (val==null || val=='') {
		return '<button style="margin:5px 15px" id=sptXg>更换</button>'
	}
	return '<button style="margin:5px 15px" id=sptXgs>更换</button><button style="margin:5px 0" names='+val+' id=sptXz>查看</button>'
}
	// 组织架构图片上传
	function openZuzhi() {
		var records = getSelectedRecords('grid');
		var abc = []
		abc.push('123');
		abc.push(records[0].PROJID)
		abc = JSON.stringify(abc)
        window.localStorage.setItem("treeSeleted", abc)
		dialogUtil.open(
			"shangchuan",
			"组织架构图片上传",
			"/times-web/pages/params/shangchuan.jsp?isZuzhi=1&projid="+records[0].PROJID,
			150,400,
			function(){
                reloadGrid('grid');
            }
        );
	}

	// 项目介绍图片上传
	function openXiangmu() {
		var records = getSelectedRecords('grid');
		dialogUtil.open(
			"shangchuan",
			"项目介绍图片上传",
			"/times-web/pages/params/shangchuan.jsp?isZuzhi=0&projid="+records[0].PROJID,
			150, 400,
			function(){
	            reloadGrid('grid');
	        }
	    );
	}

	// 沙盘图设置
	function openShapantu() {
		var records = getSelectedRecords('grid');
		dialogUtil.open("uploadSpt","沙盘图上传","/times-web/pages/qunee/uploadSpt.jsp?projid="+records[0].PROJID,150,400,function(){
            reloadGrid('grid');
        });
	}
	// 预览、下载
	function openXiazai(value){
		window.localStorage.setItem("yulanUrl", value)
		dialogUtil.open("zaixianyulan","在线预览","/times-web/pages/params/my.jsp",600,1000,function(){
		    reloadGrid('grid');
		});
	}

//button methods.......
function query(check){
	var nodes = zTree.getSelectedNodes();
	var p_type = selectedNode?selectedNode.type:"";
	var map = Form.formToMap('queryForm');
	var orgid=$("#orgId").val();
	map.ORG_CODE = $("#orgCode").val();
	map.ORG_NAME = $("#org_name").val();
	map.ORG_ID = orgid;
	map.BUSI_CODE=$("#busiCode").val();
	var params = parameters;
	for(var key in map){
		params[key] = map[key];
	}
	reloadGrid('grid',params);
	
	// if(check){
	// 	ajax.remoteCall(path+"/com.open.eac.base.dao.OrganDao:getOrgantype",[p_type],function(reply){
	// 		var data = reply.getResult();
	// 		//Form.mapToForm('organForm',data);
	// 		$('#search').empty();
	// 		for(var i=0;i<data.length;i++){
	// 			/*var org_type=data[i].ORG_TYPE;*/
	// 			var html='<span  class="normal" for="ORG_SCOPE" onclick="changeScope(this, \''+data[i].ORG_TYPE+'\')">'+data[i].TYPE_NAME+'</span>&nbsp;&nbsp;&nbsp;'
	// 		     $('#search').append(html);
	// 		}
	// 	});
	// }
}
function doReset(){
	document.getElementById("queryForm").reset();
	query(true);
}
//编辑沙盘图
function editSpt(){
    var records = getSelectedRecords('grid');
    if(records.length!=1){
        dialogUtil.alert('请选择一条记录进行设置！',true);
        return false;
    }
    var fileid = records[0].FILEID;
    if(fileid == null || fileid == undefined || fileid == '' || fileid == 'null'){
        dialogUtil.open("uploadSpt","沙盘图上传","/times-web/pages/qunee/uploadSpt.jsp?projid="+records[0].PROJID,150,400,function(){
            reloadGrid('grid');
        });
	}else{
		//console.log(records);
        dialogUtil.confirm('需要重新上传沙盘图么?',function(){
            dialogUtil.open("uploadSpt","沙盘图上传","/times-web/pages/qunee/uploadSpt.jsp?projid="+records[0].PROJID,150,400,function(){
                reloadGrid('grid');
            });
        },function(){
            dialogUtil.open("uploadSpt","沙盘图设置","/times-web/pages/qunee/sptlist.jsp?projid="+records[0].PROJID,600,1200,function(){
                reloadGrid('grid');
            });
		});
    }
}

function shangchuanZuzhi(){
	var treeSeleted = JSON.parse(localStorage.getItem("treeSeleted"))
	var records = getSelectedRecords('grid');
	console.log('组织上传', treeSeleted, records)
	if (records.length > 0) {
		var abc = []
		abc.push('123');
		abc.push(records[0].PROJID)
		abc = JSON.stringify(abc)
        window.localStorage.setItem("treeSeleted", abc)
		dialogUtil.open(
			"shangchuan",
			"组织架构图片上传",
			"/times-web/pages/params/shangchuan.jsp?isZuzhi=1&projid="+records[0].PROJID,
			150,400,
			function(){
                reloadGrid('grid');
            }
        );
		return;
	}
	if(treeSeleted[0]=='AREA' || treeSeleted[0]=='PROJECT') {
		dialogUtil.open(
			"shangchuan",
			"组织架构图片上传",
			"/times-web/pages/params/shangchuan.jsp?isZuzhi=1&projid="+treeSeleted[1],
			150,400,
			function(){
                reloadGrid('grid');
            }
        );
        return;
	} else {
		dialogUtil.alert("请选择公司或者项目分期")
		return;
	}
}
function shangchuanXiangmu(){
	var records = getSelectedRecords('grid');
	if (records.length==0) {
		dialogUtil.alert("请选择项目分期")
		return;
	}
	dialogUtil.open(
		"shangchuan",
		"项目介绍图片上传",
		"/times-web/pages/params/shangchuan.jsp?isZuzhi=0&projid="+records[0].PROJID,
		150,400,
		function(){
            reloadGrid('grid');
        }
    );
	console.log('项目上传', records)
}

function addOrgan(){
	var currentId = $("#orgId").val();
	var currentName = $("#orgName").val();
	var p_type = selectedNode?selectedNode.type:"";
	dialogUtil.open("user","添加机构",path+"/pages/organEdit.jsp?oper=add&pId="+currentId+"&p_type="+p_type,300,300,function(){
		var nodes = zTree.getSelectedNodes();
		
		if(nodes.length>0){
			var cnode= nodes[0];
			refreshChildren(cnode);
		}else{
			window.location.reload(true);
		}
	});

}

function deleteOrgan(){
	var records = getSelectedRecords('grid');
	if(records.length == 0){
		dialogUtil.alert('请选择需要操作的记录！',true);
		return false;
	}
	dialogUtil.confirm('确认要删除选择的'+records.length+'条记录吗？',function(){
		var orgids = new Array();
		for(var i = 0;i<records.length;i++){
			orgids.push(records[i].ORG_ID);
		}
		doDeleteOrgan(orgids.join(","));
	},function(){});
	
}
function doDeleteOrgan(orgid){
	ajax.remoteCall(path+"/com.open.eac.base.dao.OrganDao:delStructure",[orgid],function(reply){
		var data = reply.getResult();
		dialogUtil.alert(data.msg,function(){		
			reloadGrid('grid');
			
		});
	});
}

function exportOrgan(){
	exportExcel("grid","组织基础信息");
}
function editOrgan(){
	var records = getSelectedRecords('grid');
	if(records.length!=1){
		dialogUtil.alert('请选择一条记录进行调整！',true);
		return false;
	}
	var type = records[0].ORG_TYPE;
	
	var currentId = $("#orgId").val();
	var currentName = $("#orgName").val();
	
	dialogUtil.open("user","修改机构",path+"/pages/organEdit.jsp?oper=edit&pId="+currentId+"&type="+type+"&ORG_CODE="+records[0].ORG_CODE,300,300,function(){
	var nodes = zTree.getSelectedNodes();
		if(nodes.length>0){
			var cnode= nodes[0];
			refreshBrothers(cnode);
		}
	});
}
function changeOrgan(){
	var records = getSelectedRecords('grid');
	if(records.length!=1){
		dialogUtil.alert('请选择换届组织！',true);
		return false;
	}
	
	dialogUtil.open("leader","组织换届","orgLeaderEdit.jsp?oper=edit&ORG_ID="+records[0].ORG_ID,300,500,function(){
	var nodes = zTree.getSelectedNodes();
		if(nodes.length>0){
			var cnode= nodes[0];
			refreshBrothers(cnode);
		}
	});
}
function viewOrgan(){
	var records = getSelectedRecords('grid');
	if(records.length!=1){
		dialogUtil.alert('请选择一条记录进行操作！',true);
		return false;
	}
	dialogUtil.open("user","查看用户","organEdit.jsp?oper=view&ORG_CODE="+records[0].ORG_CODE,400,500,function(){
		
	});
}

function importOrgan(){
	dialogUtil.open("user","导入组织","organImport.jsp?oper=import",200,400,function(){
	});
}




