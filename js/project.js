$(document).ready(function(){
	$(window).scroll(function(event){
		var y=$(this).scrollTop();
		if(y >=300){
			
			$("#phone").toggleClass("animate");
		}
	});
});