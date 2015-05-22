/**
 *   幻灯片扩展方法
 * @ author bingoo
 */
(function ($){
		$.fn.binSlide=function (options){
				var opt={
						imgBox:null,
						btnBox:null,
						mouse:'mouseover',
						effect:'fade',
						iSpeed:5000
				};
				$.extend(opt,options);
				return $(this).each(function (){
						var $this = $(this);
						var owrap=$(this).find(opt.imgBox),//获取图片盒子
								object=owrap.find('.img'),//获取所有的图片
								oSilde=owrap.find('.slide'),//获取滑动标签
								wrapBtn=$(this).find(opt.btnBox),//获取按钮的外包元素
								Button=wrapBtn.children(),//获取所有按钮
								offlength=object.length,
								offsetW=object.eq(0).width(),
								i=0,
								z_index = 1;
						if(opt.effect == 'slide_l'){
								oSilde.width(offlength * offsetW);
						}
						gotoImg(0);
						function gotoImg(index){
								z_index++;
								if(opt.effect == 'fade')
								{
										object.stop(true,false).animate({"opacity":"0"}, 'normal',function(){$(this).css("z-index","")});
										object.eq(index).stop(true,false).animate({"opacity":"1","z-index":z_index}, 'normal');
										Button.eq(index).addClass("onbtn").siblings().removeClass();
								}
								else if(opt.effect == 'slide_l')
								{
										oSilde.stop(true,false).animate({left:-(index*offsetW)}, 'normal');
										Button.eq(index).addClass("onbtn").siblings().removeClass();
								}
								i=index%offlength;
						}
						function next(){i++;i%=offlength;gotoImg(i);}
						$this.AutoPlay=setInterval(next,opt.iSpeed);
						Button.each(function(index){
								if(opt.mouse == 'mouseover'){
										$(this).mouseover(function (){$this.timer = setTimeout(function (){gotoImg(index);}, 200);});
										$(this).mouseout(function (){clearTimeout($this.timer);});
								}else{
										$(this).click(function (){gotoImg(index);});
								}
						});
						Button.hover(function(){clearInterval($this.AutoPlay);},function(){$this.AutoPlay = setInterval(next,opt.iSpeed);});
				})
		};
})(jQuery);