/*
* @Author: Administrator
* @Date:   2017-09-11 23:08:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-26 20:36:27
*/

$(function() {
	var url = window.location.href,
		productId = url.substring(url.indexOf('#')+1);
	// $.ajax({
	// 	url: '',
	// 	data: {
	// 		productId: productId
	// 	},
	// 	success: function(data) {

	// 	}
	// })
	
	// 产品展示图切换效果
	changeShowImgs();
})

// 产品展示图切换效果
function changeShowImgs() {
	// 默认展示第一张产品图
	$('.detail-img > img').attr('src', 'img/product-thumb-1.jpg');
	$('.small-imgs > li').click(function() {
		$('.detail-img > img').attr('src', $(this).children('img').attr('src'));
	})
}
