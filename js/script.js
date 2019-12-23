$(".main_menu > li").on("mouseover",function(){
    $(this).children(".sub_menu").stop().slideDown();
    $(this).children("a").css({"background-color":"#029046", "color":"#fff"})
});
$(".main_menu > li").on("mouseleave",function(){
    $(this).children(".sub_menu").stop().slideUp();
    $(this).children("a").css({"background-color":"#f6c015", "color":"#000"})
});

var idx = 0;
setInterval(function () {
    idx >= 2 ? idx = 0 : idx++;
    $(".slide_wrap").animate({"margin-left":"-"+idx+"00%"},1000);
},3000);

$(".partner img").on("click",function(){
    $(".popup").show();
});

$(".popup button").on("click",function(){
    $(".popup").hide();
});