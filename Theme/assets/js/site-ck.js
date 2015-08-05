$(document).ready(function(){
	$.jribbble.getShotsByPlayerId("powdah",function(e){var t=[];
	$.each(e.shots,function(e,n){
		t.push('<li><a href="'+n.url+'">');
		t.push('<img src="'+n.image_url+'" ');
		t.push('alt="'+n.title+'"><span class="d-hover">'+n.title+"<p>view on dribbble</p></span></a></li>")
	});
	$(".slides").html(t.join(""))},{page:1,per_page:8})
});

$(function(){$(".service").hover(function(){
	$("#networks").addClass($(this).data("network")).addClass("active");
	$("#networks p").html($(this).data("tip"))},function(){
		$("#networks").removeClass();
		$("#networks p").html("You can find me all over the web")
	})
});

jQuery(document).ready(function(){
	$("#hero").height($(window).height());
	$(window).resize(function(){
		$("#hero").height($(window).height());
		$("#hero").css("min-height","600px")
	});
	$("#work").height($(window).height());
	$(window).resize(function(){$("#work").minHeight($(window).height());
		$(".showcase-info").css("min-height","360px")
	});
	$("#networks").height($(window).height());
	$(window).resize(function(){
		$("#networks").height($(window).height());
		$("#networks").css("min-height","600px")
	})
});

jQuery(document).ready(function(e){e(".scroll").click(function(t){t.preventDefault();
	e("html,body").animate({scrollTop:e(this.hash).offset().top},1e3)})});

/*Change, in the first line the username "powdah" with your dribbble username. That's all */