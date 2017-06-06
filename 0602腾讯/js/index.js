$(function(){
	function* abc(){
    	while(true){
    		yield true;
    		yield false;
    	}
   };
	var f=abc();
	$("#more").click(function(){
		if(f.next().value){
			$(this).children("a").html("收起");
			$(this).children("i").removeClass("glyphicon-plus").addClass("glyphicon-minus");
			$(".nav").css("height","120px");
		}
		else{
			$(this).children("a").html("更多");
			$(this).children("i").addClass("glyphicon-plus").removeClass("glyphicon-minus");
			$(".nav").css("height","40px");
		}
	});
	
	$(".remove").click(function(){
		$("footer").remove();
		$("section").css("padding-bottom",0)
	});
})
