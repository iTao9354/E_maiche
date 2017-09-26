/*
* @Author: Administrator
* @Date:   2017-09-11 23:08:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-26 22:54:18
*/

$(function() {
	// 选择查询条件
	chooseConditions();

	initProductTable();
})

// 选择查询条件
var conditionObj = {};
function chooseConditions() {	
	$('.condition-list > a').click(function() {
		var _this = $(this),
			selectedHtml = _this.text(),
			selectedName = _this.attr('name');
		_this.addClass('selected').siblings().removeClass('selected');
		$('.hasChoosed > .iconfont').show();
		conditionObj[selectedName] = selectedHtml;
		$('.hasChoosed > p').empty()
		for(var name in conditionObj) {
			$('.hasChoosed > p').append('<span><span>'+conditionObj[name]+'</span><i class="iconfont" onclick="remCondition(this,\''+name+'\');">&#xe622;</i></span>');
		}		
	})
		
}
function remCondition(ele, name) {
	var removedSelectedEle = $('.condition-list > .selected[name="'+name+'"]');
	$(ele).parent().remove();	
	if(removedSelectedEle.text() +'--'+$(ele).prev().text()) {
		removedSelectedEle.removeClass('selected').parent().children().eq(0).addClass('selected');
	}
	delete conditionObj[name];
	if($.isEmptyObject(conditionObj)) {
		$('.hasChoosed > .iconfont').hide();
	}
}

// 一键清空
function remAllConditions(ele) {
	$('.hasChoosed > p').empty();
	conditionObj = {};
	$(ele).hide();
	$('.condition-list > a').removeClass('selected');
	$('.condition-list').each(function() {
		$(this).children().eq(0).addClass('selected');
	})
}

// 初始化表格
var productTableData = [
    {
    	carInfoID: "adhiheeiw22", 
    	frontImgURL: "product-thumb-1", 
    	czms: null,
    	carName: "1111奥迪A6L2014款 30 FSI", 
    	price: 28.50, 
    	outputVolume: 2.5,
    	sprq: "2014年5月2日",
    	ys: "黑",
    	xslc: 3.50,
    	desc: "一手私家车 无事故 可按揭",
    	fbrq: "2017-07-27"
    },
    { 
    	carInfoID: "desfefcds3",
    	frontImgURL: "product-thumb-2", 
    	czms: null,
    	carName: "2222奥迪A6L2014款 30 FSI", 
    	price: 28.52, 
    	outputVolume: 2.5,
    	sprq: "2014年5月1日",
    	ys: "黑",
    	xslc: 4.8,
    	desc: "一手私家车 无事故 可按揭",
    	fbrq: "2017-07-27"
    },
    { 
    	carInfoID: "t4frfdds3",
    	frontImgURL: "product-thumb-1", 
    	czms: null,
    	carName: "1111奥迪A6L2014款 30 FSI", 
    	price: 28.50, 
    	outputVolume: 2.5,
    	sprq: "2014年5月2日",
    	ys: "黑",
    	xslc: 3.50,
    	desc: "一手私家车 无事故 可按揭",
    	fbrq: "2017-07-27"
    },
    { 
    	carInfoID: "fef3f3",
    	frontImgURL: "product-thumb-2", 
    	czms: null,
    	carName: "2222奥迪A6L2014款 30 FSI", 
    	price: 28.52, 
    	outputVolume: 2.5,
    	sprq: "2014年5月1日",
    	ys: "黑",
    	xslc: 4.8,
    	desc: "一手私家车 无事故 可按揭",
    	fbrq: "2017-07-27"
    },
    { 
    	carInfoID: "defdsfw3dds3",
    	frontImgURL: "product-thumb-1", 
    	czms: null,
    	carName: "1111奥迪A6L2014款 30 FSI", 
    	price: 28.50, 
    	outputVolume: 2.5,
    	sprq: "2014年5月2日",
    	ys: "黑",
    	xslc: 3.50,
    	desc: "一手私家车 无事故 可按揭",
    	fbrq: "2017-07-27"
    },
    { 
    	carInfoID: "dddddr3fds3",
    	frontImgURL: "product-thumb-2", 
    	czms: null,
    	carName: "2222奥迪A6L2014款 30 FSI", 
    	price: 28.52, 
    	outputVolume: 2.5,
    	sprq: "2014年5月1日",
    	ys: "黑",
    	xslc: 4.8,
    	desc: "一手私家车 无事故 可按揭",
    	fbrq: "2017-07-27"
    }        
 ];
function initProductTable(){
	$("#productTable").width("100%").dataTable({
		"columns":[
		            { "data": "frontImgURL", width: "144px" },
		            { "data": "czms" },
		            { "data": "price", width: "80px" },
		            { "data": "sprq" },
		            { "data": "price" },
		            { "data": "xslc" },
		            { "data": "sprq" }
		 ],
//		 "json":{
//			 "total":10,
			 "data": productTableData,
//		 },
		// ajax: {
		//     url:webpath+'resInfo/list',
		//     type: 'POST',
		//     data: JSON.Stringify(conditionObj),
		//     dataSrc: function (json) {
		//         json.iTotalRecords = json.total;
		//         json.iTotalDisplayRecords = json.total;
		//         return json.data;
		//     }
		// },
		columnDefs:[
			{
				"targets" : 0,//操作按钮目标列
				"className": "td-img",
				"orderable": false,
				"render" : function(data, type,row) {
					  var html = '';
					  html += '<a href="productDetail.html#'+row.carInfoID+'"><img src="img/'+data+'.jpg"></a>';
				      return html;
				   }
			},
			{
				"targets" : 1,//操作按钮目标列
				"className": "car-info",
				"orderable": false,
				"render" : function(data, type,row) {
					  var html = '';
					  html += '<a href="productDetail.html#'+row.carInfoID+'">'+row.carName+'</a>';
					  html += '<p>';
					  html += '排量：<span>'+row.outputVolume+'</span>';
					  html += '上牌日期：<span>'+row.sprq+'</span>';
					  html += '颜色：<span>'+row.ys+'</span>';
					  html += '行驶里程：<span>'+row.xslc+'万公里</span>';
					  html += '</p>'
					  html += '<p>车主说明：<span>'+row.desc+'</span></p>';
					  html += '<p>发布时间：<span>'+row.fbrq+'</span></p>';
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