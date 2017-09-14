/*
* @Author: Administrator
* @Date:   2017-09-11 23:08:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-14 20:06:26
*/

$(function() {
	// 选择查询条件
	chooseConditions();

	initProductTable();
})

// 选择查询条件
function chooseConditions() {
	$('.condition-list').each(function() {
		$(this).children('a').click(function() {
			var _this = $(this),
				selectedHtml = _this.html();
			_this.addClass('selected').siblings().removeClass('selected');
			$('.hasChoosed > p').append('<span>'+selectedHtml+'<i class="iconfont">&#xe622;</i></span>');
			$('.hasChoosed > .iconfont').show();
		})
	})	
}

// 初始化表格
var productTableData = [
    { 
    	productImg: "product-thumb-1", 
    	productDesc: null,
    	productTitle: "1111奥迪A6L2014款 30 FSI", 
    	price: 28.50, 
    	displacement: 2.5,
    	registeredDate: "2014年5月2日",
    	color: "黑",
    	distance: 3.50,
    	desc: "一手私家车 无事故 可按揭",
    	issuedDate: "2017-07-27"
    },
    { 
    	productImg: "product-thumb-2", 
    	productDesc: null,
    	productTitle: "2222奥迪A6L2014款 30 FSI", 
    	price: 28.52, 
    	displacement: 2.5,
    	registeredDate: "2014年5月1日",
    	color: "黑",
    	distance: 4.8,
    	desc: "一手私家车 无事故 可按揭",
    	issuedDate: "2017-07-27"
    },
    { 
    	productImg: "product-thumb-1", 
    	productDesc: null,
    	productTitle: "1111奥迪A6L2014款 30 FSI", 
    	price: 28.50, 
    	displacement: 2.5,
    	registeredDate: "2014年5月2日",
    	color: "黑",
    	distance: 3.50,
    	desc: "一手私家车 无事故 可按揭",
    	issuedDate: "2017-07-27"
    },
    { 
    	productImg: "product-thumb-2", 
    	productDesc: null,
    	productTitle: "2222奥迪A6L2014款 30 FSI", 
    	price: 28.52, 
    	displacement: 2.5,
    	registeredDate: "2014年5月1日",
    	color: "黑",
    	distance: 4.8,
    	desc: "一手私家车 无事故 可按揭",
    	issuedDate: "2017-07-27"
    },
    { 
    	productImg: "product-thumb-1", 
    	productDesc: null,
    	productTitle: "1111奥迪A6L2014款 30 FSI", 
    	price: 28.50, 
    	displacement: 2.5,
    	registeredDate: "2014年5月2日",
    	color: "黑",
    	distance: 3.50,
    	desc: "一手私家车 无事故 可按揭",
    	issuedDate: "2017-07-27"
    },
    { 
    	productImg: "product-thumb-2", 
    	productDesc: null,
    	productTitle: "2222奥迪A6L2014款 30 FSI", 
    	price: 28.52, 
    	displacement: 2.5,
    	registeredDate: "2014年5月1日",
    	color: "黑",
    	distance: 4.8,
    	desc: "一手私家车 无事故 可按揭",
    	issuedDate: "2017-07-27"
    }        
 ];
function initProductTable(){
	$("#productTable").width("100%").dataTable({
		"columns":[
		            { "data": "productImg", width: "144px" },
		            { "data": "productDesc" },
		            { "data": "price", width: "80px" },
		            { "data": "registeredDate" },
		            { "data": "price" },
		            { "data": "distance" },
		            { "data": "registeredDate" }
		 ],
//		 "json":{
//			 "total":14,
			 "data": productTableData,
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
		columnDefs:[
			{
				"targets" : 0,//操作按钮目标列
				"className": "td-img",
				"orderable": false,
				"render" : function(data, type,row) {
					  var html = '';
					  html += '<a href="javascript:;"><img src="img/'+data+'.jpg"></a>';
				      return html;
				   }
			},
			{
				"targets" : 1,//操作按钮目标列
				"className": "car-info",
				"orderable": false,
				"render" : function(data, type,row) {
					console.log(row)
					  var html = '';
					  html += '<a href="javascript:;">'+row.productTitle+'</a>';
					  html += '<p>';
					  html += '排量：<span>'+row.displacement+'</span>';
					  html += '上牌日期：<span>'+row.registeredDate+'</span>';
					  html += '颜色：<span>'+row.color+'</span>';
					  html += '行驶里程：<span>'+row.distance+'万公里</span>';
					  html += '</p>'
					  html += '<p>车主说明：<span>'+row.desc+'</span></p>';
					  html += '<p>发布时间：<span>'+row.issuedDate+'</span></p>';
				      return html;
				   }
			},
			{
			  	"targets" : 2,//操作按钮目标列
			  	"className": "price-list",
			  	"orderable": false,
			  	"render" : function(data, type,row) {
				  	var html = '<span>￥'+data+'万</span>'
				    return html;
			   }
			},
			{
				"targets" : 3,//操作按钮目标列
				"className": "date-invisible"
			},
			{
				"targets" : 4,//操作按钮目标列
				"className": "price-invisible"
			},
			{
				"targets" : 5,//操作按钮目标列
				"className": "distance-invisible"
			},
			{
				"targets" : 6,//操作按钮目标列
				"className": "age-invisible"
			}			
		],
		"serverSide": false      // 数据从后台调取时此处为true，在公用的common-js.jsp已定义
	});
}

//刷新数据  true  整个刷新      false 保留当前页刷新
function reloadTableData(isCurrentPage){
	$("#userTable").dataTable().fnDraw(isCurrentPage==null?true:isCurrentPage);
}