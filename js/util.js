$(function() {
    toggleShowLocation();
    changeCity();
})

// 鼠标划入地理位置图标，下拉框显示
function toggleShowLocation() {
    $('#location').hover(function() {
        $(this).addClass('location-wrap');
    }, function() {
        $(this).removeClass('location-wrap');
    })
}
// 鼠标点击具体的省市进行切换
function changeCity() {
    $('.location-list > li > a').click(function() {
        $(this).addClass('selected').parent().siblings().children('a').removeClass('selected');
        $('#location .cur-city').html($(this).html());
        $('#location').removeClass('location-wrap');
    })
}


