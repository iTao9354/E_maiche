/*
* @Author: Administrator
* @Date:   2017-09-11 23:08:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-11 23:29:06
*/

$(function() {
	initDataTable();
})

// 初始化表格
function initDataTable(){
	$("#productTable").width("100%").dataTable({
		"columns":[
		            { "data": "productImg" },
		            { "data": "productTitle" },
		            { "data": "price" },
		            { "data": "displacement" },
		            { "data": "registeredDate" },
		            { "data": "color" },
		            { "data": "distance"},
		            { "data": "desc"},
		            { "data": "issuedDate"}
		 ],
//		 "json":{
//			 "total":14,
			 "data":[
			    { 
			    	productImg: "product-thumb-1", 
			    	productTitle: "奥迪A6L2014款 30 FSI", 
			    	price: 28.50, 
			    	displacement: 2.5,
			    	registeredDate: "2014年5月1日",
			    	color: "黑",
			    	distance: 3.50,
			    	desc: "一手私家车 无事故 可按揭",
			    	issuedDate: "2017-07-27"
			    }    
			 ],
//		 },
//		 ajax: {
//		     url:webpath+'/user/selectPage',
//		     "type": 'POST',
//		     "dataSrc": function (json) {
//		    	 console.log(JSON.stringify(json));
//		           json.iTotalRecords = json.total;
//		           json.iTotalDisplayRecords = json.total;
//		           return json.data;
//		     }
//		},
		columnDefs:[{
			"targets" : 0,//操作按钮目标列
			"data" : null,
			"render" : function(data, type,row) {
				  var html = '';
				  html += '<img src="img/'+data+'.jpg">';
			      return html;
			   }
		},{
			  "targets" : 7,//操作按钮目标列
			  "data" : null,
			  "render" : function(data, type,row) {
				  var id = row.userId;
				  var html =  '<a href="javascript:void(0);" class="icon-wrap" title="编辑"><i class="iconfont i-btn">&#xe66f;</i></a>';
				      html += '&nbsp;&nbsp;';
				      html +=  '<a href="javascript:void(0);" class="icon-wrap" title="删除"><i class="iconfont i-btn">&#xe614;</i></a>';
				      html += '&nbsp;&nbsp;';
				      html +=  '<a href="javascript:void(0);" class="icon-wrap" title="重置密码"><i class="iconfont i-btn">&#xe637;</i></a>';
				      html += '&nbsp;&nbsp;';
				      html +=  '<a href="javascript:void(0);" class="icon-wrap" title="角色授权"><i class="iconfont i-btn">&#xe646;</i></a>';
				      return html;
			   }
		}],
		"serverSide": false      // 数据从后台调取时此处为true，在公用的common-js.jsp已定义
	});
}

//刷新数据  true  整个刷新      false 保留当前页刷新
function reloadTableData(isCurrentPage){
	$("#userTable").dataTable().fnDraw(isCurrentPage==null?true:isCurrentPage);
}