/*
* @Author: Administrator
* @Date:   2017-09-11 23:08:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-27 23:17:27
*/

$(function() {
	initUploader();
})

// 初始化文件上传功能
// ps:此功能未完善，使用时需要配置server接口以及所有含webpath的接口
var initUploader = function(){
	// 初始化webuploader组件，设置上传等事件监听
	var $list = $('#thelist');
	var $btn =$("#ctlBtn");   //开始上传
	var thumbnailWidth = 100;   //缩略图高度和宽度 （单位是像素），当宽高度是0~1的时候，是按照百分比计算  
	var thumbnailHeight = 100; 
	var uploader = WebUploader.create({		
	    // swf文件路径
	    swf: 'plugin/webuploader-0.1.5/Uploader.swf',
	    // 文件接收服务端。
	    server: '/file/uploadAll',
	    // 选择文件的按钮。可选。
	    pick: '#picker',
	    // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
	    resize: false,
	    method:'POST',
	    // 可重复上传
	    duplicate: true
	});
	$btn.on('click',function(){
		//添加完需要与图片一起上传的参数之后,就可以手动触发uploader的上传事件了.
		uploader.upload();
	});
	
	// 上传事件对象
	var uploaderObj = {
		'fileQueued': function(file){
			$list.append( '<div id="' + file.id + '" class="item">' +
			        '<h4 class="info clearfix" name="'+file.name+'">' + file.name + '<i class="fr iconfont file-delete" title="删除">&#xe61b;</i>'+
			        												'<i class="fr iconfont file-download" title="下载">&#xe724;</i>'+
			        '</h4>' +
			        '<p class="state">等待上传...</p>' +
			    '</div>' );
		},
		'uploadProgress': function( file, percentage ) {
		    var $li = $( '#'+file.id ),
		        $percent = $li.find('.progress .progress-bar');

		    // 避免重复创建
		    if ( !$percent.length ) {
		        $percent = $('<div class="progress progress-striped active">' +
		          '<div class="progress-bar" role="progressbar" style="width: 0%">' +
		          '</div>' +
		        '</div>').appendTo( $li ).find('.progress-bar');
		    }

		    $li.find('p.state').text('上传中');

		    $percent.css( 'width', percentage * 100 + '%' );
		},
		'uploadSucc': function( file ) {
		    $( '#'+file.id ).find('p.state').text('已上传');
		    $('.info .iconfont').show();
		    // 文件下载
		    $('.file-download').on('click', function(){
		    	var name = $(this).parent().attr('name');
		    	window.open(webpath+'/file/download?fileName='+name+'&filePath=D\:\\frame\\app\\res\\cruser\\'+name);
		    })
		    // 文件删除
		    $('.file-delete').on('click', function(){
		    	var name = $(this).parent().attr('name');
		    	var _this = this;
		    	layer.confirm('删除该用户？（删除后不可恢复）', {
		    		icon: 3,
		    		btn: ['是', '否']   		
		    	}, function(index, layero){
		    		$.ajax({
			    		url: webpath + '/file/delete',
			    		type: 'POST',
			    		data: {
			    			filePath: 'D\:\\frame\\app\\res\\cruser\\'+name
			    		},
			    		success: function(data){			    			
			    			if(data){
			    				$(_this).parents('.item').remove();
			    				layer.msg('删除成功！', {icon: 1});			    				
			    			}else{
			    				layer.msg('删除失败！', {icon: 1});
			    			}
			    		}
			    	})
		    	})
		    	
		    })
		},
		'uploadErr': function( file ) {
		    $( '#'+file.id ).find('p.state').text('上传出错');
		},
		'uploadComp': function( file ) {
		    $( '#'+file.id ).find('.progress').fadeOut();
		}
	};
	
	// 当有文件被添加进队列的时候
	uploader.on( 'fileQueued', uploaderObj.fileQueued);	
	// 文件上传过程中创建进度条实时显示。
	uploader.on( 'uploadProgress', uploaderObj.uploadProgress);	
	// 文件上传成功
	uploader.on( 'uploadSuccess', uploaderObj.uploadSucc);
	// 文件上传失败，显示上传出错。
	uploader.on( 'uploadError', uploaderObj.uploadErr);
	// 完成上传完了，成功或者失败，先删除进度条。
	uploader.on( 'uploadComplete', uploaderObj.uploadComp);
}
