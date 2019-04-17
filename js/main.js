function variable(){
	var wind = $(".wrap").width(),
		block_w = $(".information_box").outerWidth(true),
		hov = Math.floor(wind/block_w),
		$box = $(".information_box:not(.active)", ".wrap"),
		$active_box = $(".information_box.active", ".wrap");
	var heshVar = {
		wind:wind,
		hov:hov,
		box:$box,
		active_box:$active_box
	}
	return heshVar;
}
function hideBox(){
		var heshVar = variable();
		if(!heshVar.active_box.length){
			heshVar.box.slice(0,heshVar.hov).addClass('active');
		}
		$(".information_box:not(.active)", ".wrap").hide();
		
}
function openBox(){
	var heshVar = variable();
		var a = heshVar.active_box.length % heshVar.hov;
		if(a){
			$(".information_box:not(.active)", ".wrap").slice(0,(heshVar.hov - a)).addClass('active').show();
		}
		else{
			$(".information_box:not(.active)", ".wrap").slice(0,heshVar.hov).addClass('active').show();
		}
		// var k = $(".information_box.active:last-of-type",".wrap").next(".information_box");
		// console.log(k);
		$(".information_box:last-of-type",".wrap").hasClass('active') ? $(".buttonCatalog").hide() : $(".buttonCatalog").show();
}
function showBtn(){
	$(".information_text").each(function(index, el) {
		$('.information_box').show();
		var $this = $(this),
			$par = $this.closest('.information_box'),
			$but_par = $(".buttonShow",$par),
			text_hide = $(".block", $par).height(),
			$but = $(".button_text",$par);
		if($this.height() < text_hide){
			$but_par.show();
			$par.removeClass('hideBox');
		}
		else{
			$but_par.hide();
			$par.addClass('hideBox');
		}
		$par.hasClass('hideBox') ? $but.text($but.attr("data-hideMess")) :  $but.text($but.attr("data-showMes"));
	});
		hideBox();
	
}

$(document).ready(function() {
	showBtn();
	$(".buttonCatalog").click(function(e) {
		openBox();
	});
	$(".buttonShow").click(function(e) {
		var $this = $(this),
			$par = $this.closest(".information_box"),
			$button = $(".button_text",$par);
			$par.toggleClass('hideBox');
			$par.hasClass('hideBox') ? $button.text($button.attr("data-hideMess")) : $button.text($button.attr("data-showMes")) ;
	});


	
});
$(window).resize(function(e) {
	showBtn();
});