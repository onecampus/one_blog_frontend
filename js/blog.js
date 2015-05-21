$(document).ready(function(){
    var list = document.getElementById("mob-list");
    var choice = document.getElementById("mob-choice");
    list.onclick = function(){
        if( list.style.backgroundColor == ""){
            list.style.backgroundColor = "RGB(59, 114, 101)";
            choice.style.visibility = "visible";
        }else{
            list.style.backgroundColor = "";
            choice.style.visibility = "hidden";
        }
    }
    // 返回顶部
    function goTop(){
        $(window).scroll(function(e){
            if($(window).scrollTop()>100){
                $("#gotop").fadeIn(1000);
            }else{
                $("#gotop").fadeOut(1000);
            }
        })
    }
    $("#gotop").click(function(e) {
        $('body,html').animate({scrollTop:0},1000);
    })
    goTop();
})