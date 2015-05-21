// alert("1");

// $(document).ready(function(){
// 	$("#mob-list ,#mob-choice").on("mouseenter", function(){
// 		$("#mob-choice").css("visibility", "visible");
// 		$("#mob-list").css("background-color", "RGB(59, 114, 101)");
// 	})
// 	$("#mob-list ,#mob-choice").on("mouseleave", function(){
// 		$("#mob-choice").css("visibility", "hidden");
// 		$("#mob-list").css("background-color", "");
// 	})
// })

// $(document).ready(function(){
//     $("#mob-list").on("click", function(){
//         if( $("#mob-list").css("background-color", "")){
//             $("#mob-list").css("background-color", "RGB(59, 114, 101)");
//             $("#mob-choice").css("visibility", "visible");
//         }else{
//             $("#mob-list").css("background-color", "");
//             $("#mob-choice").css("visibility", "hidden");
//         }
//     })
// })

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

function goTop(){
	$(window).scroll(function(e){
        //若滚动条离顶部大于100元素
       if($(window).scrollTop()>100)
           $("#gotop").fadeIn(1000);//以1秒的间隔渐显id=gotop的元素
        else
            $("#gotop").fadeOut(1000);//以1秒的间隔渐隐id=gotop的元素
    })
}
	$(function(){
    //点击回到顶部的元素
    $("#gotop").click(function(e) {
            //以1秒的间隔返回顶部
            $('body,html').animate({scrollTop:0},1000);
        })
    goTop();//实现回到顶部元素的渐显与渐隐
})