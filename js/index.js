/**获取屏幕宽度*/
function getBrowserWidth(){
		if (window.innerWidth){
				return window.innerWidth;}
		else if (document.documentElement && document.documentElement.clientWidth !== 0){
				return document.documentElement.clientWidth;	}
		else if (document.body){return document.body.clientWidth;}
		return 0;
}

/**动态设置页面相关的css属性*/
function setScreenClass(){
		var sw = getBrowserWidth();
		if(sw>=960){sw=960;}

		/**设置head背景图高度*/
		$('.head').css('height',sw/2.7 + 'px');

		if(sw===960){
				$('.navText').css('display','block');
		}else{
				$('.navText').css('display','none');
		}
}

/**图片轮播*/
function imageSlide(){
		$('.carouselBox').binSlide({
				imgBox:'.carouselImg',
				btnBox:'.carouselBtn',
				mouse:'mouseover',
				effect:'slide_l',
				iSpeed:3000
		});
}

/**图片滑动*/
function imageSlip(){
		$(function() {
				$('.head').dragend({
						//scribe: "10px",
						afterInitialize: function() {
								this.container.style.visibility = 'visible';
						}
				});
		});
}

/**小于960px时候点击显示隐藏导航按钮*/
function showNavList(){
		$('.navList').on('click',function(){
				var	navText=$('.navText');
				if(navText.css('display')==='none'){
						navText.css('display','block');
				}else{
						navText.css('display','none');
				}
		});
}

$(document).ready(function(){
		setScreenClass();
		imageSlip();
		showNavList();
		imageSlide();
});
$(window).resize(function(){
		setScreenClass();
		imageSlip();
});
