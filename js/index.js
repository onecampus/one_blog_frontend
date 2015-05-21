$(document).ready(function(){
		setScreenClass();
});
$(window).resize(function(){
		setScreenClass();
});

/**获取屏幕宽度*/
function getBrowserWidth(){
		if (window.innerWidth){
				return window.innerWidth;}
		else if (document.documentElement && document.documentElement.clientWidth !== 0){
				return document.documentElement.clientWidth;	}
		else if (document.body){return document.body.clientWidth;}
		return 0;
}

/**获取屏幕高度*/
function getBrowserHeight(){
		if (window.innerHeight){
				return window.innerHeight;}
		else if (document.documentElement && document.documentElement.clientHeight !== 0){
				return document.documentElement.clientHeight;	}
		else if (document.body){return document.body.clientHeight;}
		return 0;
}

/**动态设置页面相关的css属性*/
function setScreenClass(){
		var sw = getBrowserWidth();
		if(sw>=960)(sw=960);

		/**设置head背景图高度*/
		$(".head").css("height",sw/2.7 + "px");
}
