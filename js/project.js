$(document).ready(function(){
	$(window).scroll(function(event){
		var y=$(this).scrollTop();
		if(y >=300){
			
			$("#phone").toggleClass("animate");
			$("#desktop").toggleClass("animate");
		}
		if(y >=600){
			
			$('#speed').addClass('animate grow-img');
			$('#support').addClass('animate grow-img');
			$('#smart').addClass('animate grow-img');

			$('.icon span').addClass('animate');

	}
	});
	
		
	
});